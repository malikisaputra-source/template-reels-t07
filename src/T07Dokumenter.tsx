// Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id
// Lisensi MIT + syarat kredit-maliki (lihat LICENSE): kredit wajib tetap ada, tidak untuk diperjualbelikan.
// T07 v2 · Dokumenter Retro — mengikuti ritme reel acuan per detik (9 Nov 2026).
// Urutan: putih + kata kunci hijau → hijau: amplop/uang + kata hitam miring → langit abu + "KATANYA" merah →
// merah gelap dengan huruf raksasa samar + uang diserahkan, lingkaran putus-putus → tahun raksasa + tokoh muncul
// dari bawah + label kuning → dinding kayu disobek, tokoh mengintip + "15 tahun kemudian" → langit biru + gedung + bumi
// + judul kuning → hitam: kata berulang memudar, "inilah yang tak dikatakan siapa pun" → corong hijau berlapis + ikon
// orang → sinar kuning berputar + kutipan → neon "EDITOR" + CTA. Gambar: lihat K.gambar di konten.ts (public/t07/).
import React from "react";
import { K } from "./konten";
import { SlotAudio } from "./SlotAudio";
import { AbsoluteFill, Easing, Img, interpolate, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as muatInter } from "@remotion/google-fonts/Inter";
import { loadFont as muatArchivo } from "@remotion/google-fonts/ArchivoBlack";

const INTER = muatInter().fontFamily;
const ARCHIVO = muatArchivo().fontFamily;
const LIME = K.warna.lime, MERAH = K.warna.merah, KUNING = K.warna.kuning;
const E = Easing.bezier(0.22, 1, 0.36, 1);
const k = (f: number, a: number, b: number, d: number[], ease = E) =>
  interpolate(f, [a, b], d, { easing: ease, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
const TOKOH = staticFile(K.gambar.tokoh);
const UANG = staticFile(K.gambar.uang);

export const DURASI_T07 = 720;

const Bintik: React.FC = () => <AbsoluteFill style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "5px 5px", mixBlendMode: "overlay", pointerEvents: "none" }} />;

const Sapu: React.FC<{ f: number; di: number[] }> = ({ f, di }) => {
  const b = di.reduce((s, d) => s + k(f, d - 4, d, [0, 1]) * k(f, d, d + 6, [1, 0]), 0);
  return <AbsoluteFill style={{ backdropFilter: `blur(${b * 30}px)`, background: `rgba(255,255,255,${b * 0.15})`, pointerEvents: "none" }} />;
};

export const T07Dokumenter: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sp = (d: number, c = { damping: 12, stiffness: 160 }) => spring({ frame: f - d, fps, config: c });

  return (
    <AbsoluteFill style={{ background: "#0b0b0b", overflow: "hidden" }}>
      {/* 1 · putih + kata hijau */}
      <Sequence durationInFrames={30}>
        <AbsoluteFill style={{ background: "#f2f1ec", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontFamily: ARCHIVO, fontSize: 110, color: LIME, letterSpacing: 4, transform: `scale(${k(f, 0, 30, [0.9, 1.05], Easing.linear)})` }}>{K.kata1}</div>
        </AbsoluteFill>
      </Sequence>

      {/* 2 · hijau + amplop uang + kata miring */}
      <Sequence from={30} durationInFrames={36}>
        {(() => {
          const t = f - 30;
          return (
            <AbsoluteFill style={{ background: "radial-gradient(#c6ea74, #8dbb2b)" }}>
              <div style={{ position: "absolute", top: 520, width: "100%", textAlign: "center", fontFamily: ARCHIVO, fontStyle: "italic", fontSize: 140, color: "#111", transform: `rotate(-5deg) scale(${sp(32)})` }}>{K.kata2}</div>
              <div style={{ position: "absolute", left: 200, top: 760, width: 680, height: 520, borderRadius: 60, background: "linear-gradient(160deg,#5fd35a,#2c9c35)", boxShadow: "inset 0 -30px 60px rgba(0,0,0,0.25), 0 40px 60px rgba(0,0,0,0.3)", transform: `rotate(-8deg) translateY(${k(t, 0, 14, [600, 0])}px)` }} />
              <Img src={UANG} style={{ position: "absolute", left: 300, top: 640, width: 480, transform: `rotate(-20deg) translateY(${k(t, 4, 18, [600, 0])}px)` }} />
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 3 · langit abu + KATANYA merah */}
      <Sequence from={66} durationInFrames={34}>
        {(() => {
          const t = f - 66;
          return (
            <AbsoluteFill style={{ background: "linear-gradient(#cfcfcf,#f2f2f2 60%,#9a9a9a)" }}>
              <div style={{ position: "absolute", top: 520, width: "100%", textAlign: "center", fontFamily: ARCHIVO, fontSize: 110, color: "#c8221b", letterSpacing: 4, opacity: k(t, 0, 6, [0, 1]) }}>{K.katanya}</div>
              <div style={{ position: "absolute", left: 340, top: 1240, width: 400, height: 20, background: "#555", borderRadius: 10 }} />
              <Img src={UANG} style={{ position: "absolute", left: 380, top: 1000, width: 320, filter: "grayscale(1)", transform: `translateY(${k(t, 0, 16, [-400, 0], Easing.bezier(0.5, 0, 0.7, 1.3))}px)` }} />
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 4 · merah + huruf raksasa samar + uang diserahkan */}
      <Sequence from={100} durationInFrames={70}>
        {(() => {
          const t = f - 100;
          return (
            <AbsoluteFill style={{ background: `radial-gradient(120% 80% at 50% 30%, #b51d1d, ${MERAH} 60%, #3a0606)` }}>
              <div style={{ position: "absolute", bottom: 120, left: -40, fontFamily: ARCHIVO, fontSize: 300, color: "rgba(255,255,255,0.07)", letterSpacing: -6 }}>{K.latarMerah}</div>
              <svg width={1080} height={1920} style={{ position: "absolute", opacity: 0.12 }}>{[0, 1, 2].map((i) => <polygon key={i} points={`${200 + i * 180},1920 ${540 + i * 60},${500 + i * 120} ${880},1920`} fill="none" stroke="#fff" strokeWidth={40} />)}</svg>
              <Img src={UANG} style={{ position: "absolute", left: k(t, 0, 20, [1100, 560]), top: 860, width: 380, transform: "rotate(-10deg)" }} />
              <div style={{ position: "absolute", left: 360, top: 830, width: 180, height: 110, borderRadius: 14, background: LIME, color: "#111", fontFamily: ARCHIVO, fontSize: 40, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${sp(118)})` }}>{K.logo}</div>
              {[[450, 885], [770, 930]].map(([x, y], i) => (
                <svg key={i} width={240} height={240} style={{ position: "absolute", left: x - 120, top: y - 120, transform: `rotate(${t * 3}deg)`, opacity: k(t, 20 + i * 6, 28 + i * 6, [0, 1]) }}><circle cx={120} cy={120} r={110} fill="none" stroke="#ff8b8b" strokeWidth={3} strokeDasharray="12 10" /></svg>
              ))}
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 5 · tahun raksasa + tokoh naik + label kuning */}
      <Sequence from={170} durationInFrames={110}>
        {(() => {
          const t = f - 170;
          return (
            <AbsoluteFill style={{ background: `radial-gradient(120% 80% at 50% 30%, #a51b1b, ${MERAH} 60%, #2a0404)` }}>
              <div style={{ position: "absolute", top: 220, width: "100%", textAlign: "center", fontFamily: ARCHIVO, fontSize: 300, color: "#fff", letterSpacing: -8, opacity: k(t, 0, 8, [0, 1]) }}>{K.tahun}</div>
              <Img src={TOKOH} style={{ position: "absolute", left: 120, bottom: 0, width: 840, filter: "contrast(1.1)", transform: `translateY(${k(t, 10, 34, [1200, 0])}px)` }} />
              <div style={{ position: "absolute", left: 300, top: 1340, padding: "16px 30px", background: KUNING, borderRadius: 6, fontFamily: INTER, fontWeight: 800, fontSize: 52, color: "#111", transform: `scale(${sp(170 + 44)})`, boxShadow: "0 10px 20px rgba(0,0,0,0.4)" }}>
                {K.label.besar}<div style={{ fontWeight: 500, fontSize: 30 }}>{K.label.kecil}</div>
              </div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 6 · dinding kayu disobek */}
      <Sequence from={280} durationInFrames={80}>
        {(() => {
          const t = f - 280;
          const lubang = k(t, 0, 20, [0, 1]);
          return (
            <AbsoluteFill style={{ background: "repeating-linear-gradient(90deg, #6b4526 0 6px, #7d5432 6px 14px, #5e3b1f 14px 22px)" }}>
              <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.5))" }} />
              <div style={{ position: "absolute", left: 140, top: 520, width: 800, height: 900, clipPath: `polygon(${[0, 12, 25, 40, 55, 70, 85, 100].map((x, i) => `${50 + (x - 50) * lubang}% ${50 + ((i % 2 ? 8 : 0) - 50) * lubang}%`).join(",")}, ${[100, 88, 72, 58, 42, 28, 12, 0].map((x, i) => `${50 + (x - 50) * lubang}% ${50 + ((i % 2 ? 92 : 100) - 50) * lubang}%`).join(",")})`, background: "#e9e4da" }}>
                <Img src={TOKOH} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%", transform: `scale(${k(t, 0, 80, [1.3, 1.1], Easing.linear)})` }} />
              </div>
              <div style={{ position: "absolute", left: 140, top: 1420, fontFamily: INTER, fontWeight: 700, fontSize: 56, color: "#fff", textShadow: "0 4px 12px rgba(0,0,0,0.6)", opacity: k(t, 24, 32, [0, 1]) }}>{K.kemudian}</div>
              <div style={{ position: "absolute", left: 200, top: 300, fontFamily: ARCHIVO, fontSize: 120, color: "#fff", transform: `rotate(18deg) scale(${sp(280 + 44)})`, textShadow: "0 6px 0 rgba(0,0,0,0.4)" }}>{K.stempel}</div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 7 · langit biru + gedung + bumi + judul kuning */}
      <Sequence from={360} durationInFrames={70}>
        {(() => {
          const t = f - 360;
          return (
            <AbsoluteFill style={{ background: "linear-gradient(#3d8bd8,#a9d3f5 60%,#e8f3fb)" }}>
              {[[100, 300, 280, 60], [600, 420, 360, 70], [300, 600, 240, 50]].map(([x, y, w, h], i) => <div key={i} style={{ position: "absolute", left: x + t * (0.4 + i * 0.2), top: y, width: w, height: h, borderRadius: h, background: "rgba(255,255,255,0.8)", filter: "blur(6px)" }} />)}
              <div style={{ position: "absolute", top: 260, width: "100%", textAlign: "center", fontFamily: ARCHIVO, fontSize: 82, lineHeight: 1, color: KUNING, textShadow: "0 5px 0 #6b4f00", transform: `scale(${sp(362)})` }}>{K.judulLangit[0]}<br />{K.judulLangit[1]}</div>
              <div style={{ position: "absolute", left: 540 - 300, top: 1000, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #6fb6ff, #1d5fb3 55%, #0b2c5a)", overflow: "hidden", transform: `translateY(${k(t, 0, 20, [800, 0])}px)` }}>
                {[[60, 120, 220, 160], [320, 260, 180, 220], [140, 380, 160, 120]].map(([x, y, w, h], i) => <div key={i} style={{ position: "absolute", left: x + ((t * 2) % 600) - 100, top: y, width: w, height: h, borderRadius: "40% 60% 50% 50%", background: "#3f9a4a" }} />)}
              </div>
              <div style={{ position: "absolute", left: 380, top: 760, width: 320, height: 300, background: "linear-gradient(#5d6e80,#2f3b48)", transform: `translateY(${k(t, 4, 24, [800, 0])}px)`, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, padding: 24 }}>
                {Array.from({ length: 15 }).map((_, i) => <div key={i} style={{ background: "rgba(180,220,255,0.5)" }} />)}
              </div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 8 · hitam: kata berulang memudar */}
      <Sequence from={430} durationInFrames={60}>
        {(() => {
          const t = f - 430;
          return (
            <AbsoluteFill style={{ background: "#0a0a0a" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ position: "absolute", left: 60, top: 200 + i * 190, fontFamily: ARCHIVO, fontSize: 150, whiteSpace: "nowrap", color: `rgba(255,255,255,${0.04 + (i === 3 ? 0.1 : 0)})`, transform: `translateX(${(i % 2 ? -1 : 1) * t * 3}px)` }}>{K.ulang}</div>
              ))}
              <div style={{ position: "absolute", top: 930, width: "100%", textAlign: "center", fontFamily: INTER, fontSize: 44, color: "#ddd" }}>‹ {K.takDikatakan.depan} <span style={{ color: LIME }}>{K.takDikatakan.sorot}</span> ›</div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 9 · corong hijau berlapis + ikon orang */}
      <Sequence from={490} durationInFrames={90}>
        {(() => {
          const t = f - 490;
          return (
            <AbsoluteFill style={{ background: "#0d0d0d" }}>
              {Array.from({ length: 5 }).map((_, i) => {
                const w = 620 - i * 110;
                const m = spring({ frame: t - i * 5, fps, config: { damping: 12 } });
                return <div key={i} style={{ position: "absolute", left: 540 - w / 2, top: 780 + i * 90, width: w, height: 110, borderRadius: "50%", background: `linear-gradient(${["#b6f04c", "#93d433", "#73b524", "#5a9a1a", "#447c12"][i]}, #2e5a0a)`, boxShadow: "0 12px 0 rgba(0,0,0,0.5)", transform: `scale(${m}) rotateX(55deg)` }} />;
              })}
              <svg width={80} height={90} viewBox="0 0 90 100" style={{ position: "absolute", left: 500, top: k(t, 20, 50, [500, 760], Easing.inOut(Easing.quad)) }}><circle cx="45" cy="28" r="22" fill="#ddd" /><path d="M5 100 Q5 58 45 58 Q85 58 85 100 Z" fill="#ddd" /></svg>
              <div style={{ position: "absolute", top: 1360, width: "100%", display: "flex", justifyContent: "center", gap: 40, opacity: k(t, 54, 64, [0, 1]) }}>
                {[0, 1, 2, 3].map((i) => <svg key={i} width={80} height={90} viewBox="0 0 90 100"><circle cx="45" cy="28" r="22" fill="#ddd" /><path d="M5 100 Q5 58 45 58 Q85 58 85 100 Z" fill="#ddd" /></svg>)}
              </div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 10 · sinar kuning berputar + kutipan */}
      <Sequence from={580} durationInFrames={70}>
        {(() => {
          const t = f - 580;
          return (
            <AbsoluteFill style={{ background: "#111" }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ position: "absolute", left: 540, top: 960, width: 1500, height: 260, background: KUNING, transformOrigin: "0 50%", transform: `translateY(-130px) rotate(${i * 90 + 30 + t * 0.8}deg) scaleX(${k(t, 0, 14, [0, 1])})`, clipPath: "polygon(0 46%, 100% 0, 100% 100%, 0 54%)" }} />
              ))}
              <div style={{ position: "absolute", left: 540 - 260, top: 960 - 260, width: 520, height: 520, borderRadius: "50%", background: KUNING, transform: `scale(${sp(582)})` }} />
              <div style={{ position: "absolute", left: 300, top: 880, width: 480, fontFamily: INTER, fontWeight: 800, fontSize: 52, color: "#1a2a8a", lineHeight: 1.05, textAlign: "center" }}>
                {K.kutipan.awal} <span style={{ fontWeight: 400, fontSize: 40 }}>{K.kutipan.tengah}</span> {K.kutipan.akhir}
              </div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      {/* 11 · neon EDITOR + CTA */}
      <Sequence from={650}>
        {(() => {
          const t = f - 650;
          const kedip = t < 12 ? (t % 4 < 2 ? 0.3 : 1) : 1;
          return (
            <AbsoluteFill style={{ background: "#070707", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: ARCHIVO, fontSize: 150, color: "#d9ff6a", opacity: kedip, textShadow: "0 0 18px #b6ff00, 0 0 50px #8fd400, 0 0 90px #5a9a00" }}>{K.neon}</div>
              <div style={{ marginTop: 20, fontFamily: INTER, fontSize: 32, color: "#aaa", opacity: k(t, 14, 22, [0, 1]) }}>{K.akun}</div>
            </AbsoluteFill>
          );
        })()}
      </Sequence>

      <Sapu f={f} di={[30, 66, 100, 170, 280, 360, 430, 490, 580, 650]} />
      <Bintik />
    <SlotAudio audio={K.audio} />
    </AbsoluteFill>
  );
};
