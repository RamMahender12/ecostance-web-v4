# Builds the home page hero video: a calm linear Ken Burns across a 3x3 collage
# of EcoStance product imagery. Drift is one-direction (no elliptical/circular
# path) so the loop stays gentle like Altana-style product film.
#
# Usage:  pwsh scripts/build-hero-video.ps1 [-FfmpegPath <path to ffmpeg.exe>]

param(
  [string]$FfmpegPath = "$env:TEMP\ffbin\ffmpeg.exe"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $FfmpegPath)) {
  throw "ffmpeg not found at $FfmpegPath. Pass -FfmpegPath to point at your binary."
}

$root = Split-Path $PSScriptRoot -Parent
$outDir = Join-Path $root "public\video"
$work = Join-Path $env:TEMP "ecostance-hero"

New-Item -ItemType Directory -Force -Path $outDir, $work | Out-Null

# Reading order of the 3x3 grid, weighted toward physical product and material
# photography so the footage reads like product film rather than a screen
# recording. Platform UI sits on the diagonal as texture, not as the subject.
# The QR product photo leads so it is on screen when the drift starts.
$tiles = @(
  "products\dpp-qr.png",
  "industries\textile.jpg",
  "industries\agriculture.jpg",
  "industries\fashion.jpg",
  "products\supply.png",
  "industries\cpg.jpg",
  "industries\electronics.jpg",
  "industries\logistics.jpg",
  "industries\recycling.jpg"
)

$inputs = @()
foreach ($t in $tiles) {
  $p = Join-Path (Join-Path $root "public") $t
  if (-not (Test-Path $p)) { throw "Missing image: $p" }
  $inputs += @("-i", $p)
}

$tileW = 1280
$tileH = 800

$scaleChain = ""
for ($i = 0; $i -lt $tiles.Count; $i++) {
  $scaleChain += "[$i`:v]scale=$tileW`:$tileH`:force_original_aspect_ratio=increase,crop=$tileW`:$tileH,setsar=1[t$i];"
}
$layout = "0_0|w0_0|w0+w1_0|0_h0|w0_h0|w0+w1_h0|0_h0+h3|w0_h0+h3|w0+w1_h0+h3"
$stackIn = (0..($tiles.Count - 1) | ForEach-Object { "[t$_]" }) -join ""

$collage = Join-Path $work "collage.png"
& $FfmpegPath -y -loglevel error @inputs -filter_complex "$scaleChain$stackIn xstack=inputs=$($tiles.Count):layout=$layout[out]" -map "[out]" -frames:v 1 $collage
if ($LASTEXITCODE -ne 0) { throw "collage step failed" }
Write-Host "collage built: $collage"

# Collage is 3840x2400. Crop a 16:9 window and drift left→right only —
# linear path, no elliptical/circular motion.
$period = 30
$cropW = 1728
$cropH = 972
$pan = "crop=w=$cropW`:h=$cropH`:" +
       "x='(in_w-$cropW)*t/$period':" +
       "y='(in_h-$cropH)*0.35'," +
       "scale=1920:1080,fps=25,format=yuv420p"

$mp4 = Join-Path $outDir "hero-collage.mp4"
& $FfmpegPath -y -loglevel error -loop 1 -t $period -i $collage -vf $pan `
  -c:v libx264 -preset slow -crf 28 -movflags +faststart -an $mp4
if ($LASTEXITCODE -ne 0) { throw "video step failed" }

$poster = Join-Path $outDir "hero-collage.jpg"
& $FfmpegPath -y -loglevel error -i $mp4 -frames:v 1 -q:v 4 $poster
if ($LASTEXITCODE -ne 0) { throw "poster step failed" }

Get-Item $mp4, $poster | Select-Object Name, @{n = "MB"; e = { [math]::Round($_.Length / 1MB, 2) } }
