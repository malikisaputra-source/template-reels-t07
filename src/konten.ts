// Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id
// Lisensi MIT + syarat kredit-maliki (lihat LICENSE): kredit wajib tetap ada, tidak untuk diperjualbelikan.
// ✏️ UBAH DI SINI: semua teks, warna, gambar (taruh di public/), dan audio opsional.
// Lama tiap adegan diatur di komponen (frame, 30 fps).
export const K = {
  warna: { lime: "#9ccf2c", merah: "#8f1414", kuning: "#f2c230" },
  gambar: { tokoh: "t07/orang-potret.svg", uang: "t07/uang.png" },
  kata1: "DUA PULUH",
  kata2: "MILIAR",
  katanya: "KATANYA",
  latarMerah: "TAWARAN",
  logo: "MM",
  tahun: "2008",
  label: { besar: "bukan karena", kecil: "dia menunggu waktu yang tepat" },
  kemudian: "15 tahun kemudian",
  stempel: "MAJU",
  judulLangit: ["PERUSAHAAN", "PALING BERNILAI"],
  ulang: "TAK ADA YANG",
  takDikatakan: { depan: "ini yang tak dikatakan", sorot: "siapa pun" },
  kutipan: { awal: "keyakinan itu", tengah: "kadang terlihat seperti", akhir: "keras kepala" },
  neon: "EDITOR",
  akun: "@malikisaputra",
  // 🔊 Audio opsional. Taruh berkas di public/ lalu isi namanya, contoh: musik: "musik.mp3".
  // Paket ini sengaja TANPA musik/SFX/suara bawaan: pakai musik berlisensi bebas atau rekaman suaramu sendiri.
  audio: {
    musik: null as string | null, // backsound, diulang otomatis + fade masuk/keluar
    volumeMusik: 0.16,
    suara: null as string | null, // voice over / narasi milikmu (mp3/wav)
    volumeSuara: 1,
  },
};
