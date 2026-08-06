"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; text: string };

const welcome =
  "Hi — I’m EcoStance’s AI-native site assistant. Ask about Digital Product Passports for fashion & wool, supply-chain traceability, compliance (EUDR and beyond), carbon, or one-week pilots.";

const suggestions = ["What is a DPP?", "Fashion traceability", "EUDR compliance", "Free strategy session"];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", text: welcome }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  async function ask(message: string) {
    const trimmed = message.trim();
    if (!trimmed || busy) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: trimmed }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMsgs((m) => [
        ...m,
        { role: "assistant", text: data.reply ?? "Something went wrong — try /contact." },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", text: "Network error. Please try again or visit /contact." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void ask(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div
          className="flex h-[min(540px,72dvh)] w-[min(390px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[var(--shadow-float)]"
          role="dialog"
          aria-label="EcoStance AI-native site assistant"
        >
          <div className="flex items-center justify-between bg-ink px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-sm font-semibold">Ask EcoStance</p>
                <p className="text-[11px] text-white/55">AI-native site assistant</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              className="inline-flex size-8 items-center justify-center rounded-full hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-mint-soft/50 p-4">
            {msgs.map((m, i) => (
              <div
                key={`${i}-${m.text.slice(0, 12)}`}
                className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user" ? "ml-auto bg-ink text-white" : "bg-white text-ink shadow-[var(--shadow-soft)]"
                }`}
              >
                {m.text}
              </div>
            ))}
            {msgs.length === 1 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={busy}
                    onClick={() => void ask(s)}
                    className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-mint"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
            <div ref={endRef} />
          </div>

          <form onSubmit={onSubmit} className="border-t border-ink/8 bg-white p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about DPP, wool, EUDR, pilots…"
                className="min-w-0 flex-1 rounded-full border border-ink/10 bg-chalk px-4 py-2.5 text-sm outline-none focus:border-accent"
                disabled={busy}
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition hover:bg-ink-2 disabled:opacity-40"
              >
                <Send className="size-4" strokeWidth={1.5} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-muted">
              Product knowledge on this site.{" "}
              <Link href="/contact" className="font-semibold text-accent-dim hover:underline">
                Request a demo
              </Link>
            </p>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        aria-label={open ? "Close assistant" : "Open EcoStance AI-native site assistant"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-float)] transition duration-500 hover:bg-ink-2 hover:shadow-[var(--shadow-lift)]"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5 text-accent" strokeWidth={1.5} />}
        {open ? "Close" : "Ask EcoStance"}
      </button>
    </div>
  );
}
