// ─────────────────────────────────────────────────────
// REGISTRY.TS — Interfaces & Assembly
// Source of Truth for type definitions.
// Map data lives in /data/maps/*.ts
// ─────────────────────────────────────────────────────

export interface Tool {
  id: string;
  name: string;
  slogan: string;
  shortDescription: string;
  longDescription: string;
  verdict: string;
  strategicUse: string;
  authoritySignal: string;
  pros: string[];
  cons: string[];
  idealPara: string;
  pricing: string;
  url: string;
  category: string;
  tags?: string[];
  logoFileName?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExpertIdentity {
  name: string;
  role: string;
  entity: string;
  bio: string;
  credentials: string[];
  methodology: string;
}

export interface Selection {
  toolId: string;
  rank: number;
  reason: string;
}

export interface MapData {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  guideContent: string;
  gradientClass: string;
  primaryColor?: string;
  secondaryColor?: string;
  heroImage?: string;
  logo?: string;
  tools: Tool[];
  topPicks: Selection[];
  faqs?: FAQ[];
  expertIdentity?: ExpertIdentity;
  guideUrl?: string;
  selectionUrl?: string;
}

// ─── Modular Map Imports ───
import { audioMap } from "./maps/audio";
import { creadoresMap } from "./maps/creadores";
import { videoMap } from "./maps/video";
import { gamingMap } from "./maps/gaming";
import { productividadMap } from "./maps/productividad";

import { gratisMap } from "./maps/gratis";
import { negociosMap } from "./maps/negocios";
import { viajerosMap } from "./maps/viajeros";
import { finanzasMap } from "./maps/finanzas";

// ─── Assembly ───
export const MAP_REGISTRY: MapData[] = [
  audioMap,
  creadoresMap,
  videoMap,
  gamingMap,
  productividadMap,
  gratisMap,
  negociosMap,
  viajerosMap,
  finanzasMap,
  { id: "nocode", slug: "nocode", title: "No-Code", description: "Desarrollo sin código.", longDescription: "", gradientClass: "bg-gradient-nocode", guideContent: "", tools: [], topPicks: [] },
  { id: "academicos", slug: "academicos", title: "Académicos", description: "IA para estudio.", longDescription: "", gradientClass: "bg-gradient-academicos", guideContent: "", tools: [], topPicks: [] }
];

