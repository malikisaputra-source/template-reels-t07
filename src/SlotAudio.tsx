// Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id
// Lisensi Nonkomersial Maliki Studio (kredit wajib, dilarang dijual) (lihat LICENSE): kredit wajib tetap ada, tidak untuk diperjualbelikan.
// Slot audio opsional: musik latar (loop + fade) dan suara/VO. Kosong (null) = video tanpa suara.
import React from "react";
import { Audio, interpolate, staticFile, useVideoConfig } from "remotion";

export type IsiAudio = { musik: string | null; volumeMusik: number; suara: string | null; volumeSuara: number };

export const SlotAudio: React.FC<{ audio: IsiAudio }> = ({ audio }) => {
  const { durationInFrames: d } = useVideoConfig();
  return (
    <>
      {audio.musik && (
        <Audio src={staticFile(audio.musik)} loop volume={(f: number) => interpolate(f, [0, 15, d - 30, d], [0, audio.volumeMusik, audio.volumeMusik, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      )}
      {audio.suara && <Audio src={staticFile(audio.suara)} volume={audio.volumeSuara} />}
    </>
  );
};
