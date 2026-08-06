/**
 * Single source of truth for image paths — mirrors assets-map.json.
 * Each path is assigned once across site content (no duplicate uses).
 */
import map from "../../assets-map.json";

export const assets = map;

export type AssetKey = keyof typeof assets;
