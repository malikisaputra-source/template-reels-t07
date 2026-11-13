# T07 Dokumenter Retro · Template Video Reels (Remotion)

Template video vertikal 9:16 (1080×1920, 30 fps, 24 detik) gaya dokumenter retro: kata kunci hijau, uang + kata miring, langit abu, merah dengan huruf raksasa samar, tahun raksasa + tokoh muncul, dinding kayu disobek, langit biru + gedung + bumi, kata berulang memudar, corong hijau, sinar kuning berputar + kutipan, dan neon penutup. Ada blur sapuan di tiap potongan dan tekstur bintik.

Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Gratis dipakai dan diubah, kredit wajib tetap ada, tidak untuk diperjualbelikan.

## Cara pakai
1. Install [Node.js](https://nodejs.org) 18 ke atas.
2. Buka terminal di folder ini: `npm install`
3. Ubah teks, warna, gambar, dan audio di `src/konten.ts`. Gambar taruh di folder `public/` (contoh: `public/t07/`).
4. Pratinjau: `npm run studio`
5. Render: `npm run render` → hasil di `out/video.mp4`
6. Cek kode (opsional): `npm run cek`

## Isi `src/konten.ts`
- `warna`: `lime`, `merah`, `kuning`
- `gambar`: `tokoh`, `uang`
- `kata1`, `kata2`, `katanya`, `latarMerah`, `logo`
- `tahun`, `label`: `besar` + `kecil`
- `kemudian`, `stempel`, `judulLangit` (2 baris)
- `ulang`, `takDikatakan`: `depan` + `sorot`
- `kutipan`: `awal`, `tengah`, `akhir`
- `neon`, `akun`
- `audio`: `musik` (backsound, diulang + fade) dan `suara` (voice over), keduanya `null` = tanpa suara. Taruh berkas mp3/wav di `public/` lalu isi namanya, misalnya `musik: "musik.mp3"`.

## Gambar pengganti (placeholder)
- `orang-potret.svg`: siluet pengganti foto tokoh (ganti dengan PNG tokohmu, latar transparan).
- `uang.png`: objek ilustrasi bawaan (boleh dipakai).

## Audio
Versi ini sengaja dikirim **tanpa** musik, SFX, dan suara asli kreator. Isi slot `audio` di `src/konten.ts` dengan musik berlisensi bebas (misalnya dari YouTube Audio Library atau Pixabay Music) dan rekaman suaramu sendiri. Kalau mau efek bunyi per adegan, tambahkan `<Sequence from={frame}><Audio src={staticFile("bunyi.mp3")} /></Sequence>` di komponen.

## Struktur folder
```
proyek/
├── public/
│   ├── t07/orang-potret.svg
│   ├── t07/uang.png
├── src/
│   ├── index.ts          # titik masuk Remotion
│   ├── Root.tsx          # daftar komposisi: T07Dokumenter (1080×1920, 30 fps)
│   ├── T07Dokumenter.tsx  # animasi & tata letak
│   ├── SlotAudio.tsx     # slot musik + suara opsional
│   └── konten.ts         # ✏️ semua isi yang bisa diganti
├── package.json
├── remotion.config.ts
├── tsconfig.json
└── LICENSE
```

## Lisensi
MIT + syarat tambahan kredit-maliki (lihat `LICENSE`): kredit "Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id" wajib tetap ada, dan template ini tidak boleh dijual ulang tanpa izin.
