// Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id
// Lisensi MIT + syarat kredit-maliki (lihat LICENSE): kredit wajib tetap ada, tidak untuk diperjualbelikan.
import React from "react";
import { Composition } from "remotion";
import { T07Dokumenter, DURASI_T07 } from "./T07Dokumenter";

export const Root: React.FC = () => (
  <Composition id="T07Dokumenter" component={T07Dokumenter} durationInFrames={DURASI_T07} fps={30} width={1080} height={1920} />
);
