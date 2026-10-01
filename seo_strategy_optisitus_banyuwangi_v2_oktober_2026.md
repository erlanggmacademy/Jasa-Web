# SEO, AEO & GEO Strategy + PRD — OptiSitus (Jasa Pembuatan Website Banyuwangi)

Versi 2 — Oktober 2026  
Brand: **OptiSitus** · Domain: **https://optisitus.web.id** · CTA utama: **WhatsApp 081907019403**

---

## 0. Perubahan dari Versi 1

| # | Perubahan | Alasan |
|---|---|---|
| 1 | Brand dan domain final (OptiSitus, optisitus.web.id) sudah dimasukkan ke seluruh dokumen | Placeholder `[BRAND]` dan `domain.com` dihapus |
| 2 | **Home dan halaman lokal digabung.** `/jasa-pembuatan-website-banyuwangi/` dihapus; Home yang memegang keyword utama | V1 membuat Home dan halaman lokal bersaing untuk keyword yang sama |
| 3 | Fase 1 dipangkas menjadi halaman yang benar-benar bisa diisi konten unik | Menghindari thin content |
| 4 | Ditambahkan bagian **Identitas & Entity** (freelancer/studio, schema, GBP) | V1 mengasumsikan entity bisnis sudah jelas |
| 5 | Portofolio diberi label status proyek (klien / kolaborasi / mandiri) | Tetap jujur walau belum punya banyak klien berbayar |
| 6 | Harga wajib berisi angka sebelum publish | "Rp X" tidak membantu konversi maupun AEO |
| 7 | Bagian AEO/GEO diperbarui dengan panduan resmi Google tentang fitur AI, Bing Webmaster Tools, IndexNow | V1 terlalu konseptual |
| 8 | Ditambahkan catatan lisensi template BootstrapMade, pembersihan template, dan kebijakan privasi | Risiko yang belum dibahas di V1 |
| 9 | Link WhatsApp sudah di-URL-encode per halaman, plus kanal cadangan | Detail konversi yang kurang |
| 10 | PRD dibuat lebih rinci: ID requirement, acceptance criteria, open items, launch checklist | Supaya bisa dipakai langsung untuk pengerjaan |

---

## 1. Ringkasan Eksekutif

OptiSitus diposisikan sebagai **website lead-generation lokal** untuk jasa pembuatan website di **Banyuwangi, Jawa Timur**. Tujuan bisnisnya adalah calon klien menghubungi WhatsApp.

- **CTA utama:** WhatsApp, `https://wa.me/6281907019403`
- **Teknologi:** HTML5, CSS3, Bootstrap (template BootstrapMade), JavaScript seperlunya
- **Bahasa:** Indonesia (`<html lang="id">`)

Strategi menggabungkan technical SEO, local SEO, content SEO, AEO, GEO, entity building, CRO, portofolio nyata, dan Google Business Profile bila memenuhi syarat.

> **Realistis soal "nomor 1":** tidak ada strategi yang bisa menjamin posisi #1. Domain baru umumnya butuh beberapa bulan sebelum bersaing di keyword lokal. Kemenangan awal biasanya datang dari keyword yang lebih spesifik (website UMKM, company profile, industri tertentu), dari pencarian brand "OptiSitus", dan dari Google Maps. KPI yang dikejar: visibilitas organik, traffic berkualitas, klik WhatsApp, dan lead.

### Asumsi yang dipakai (ubah jika berbeda)
- OptiSitus dijalankan oleh **satu orang (freelancer/personal brand)**, belum berbentuk badan usaha. Jika berubah jadi tim/studio, sesuaikan halaman Tentang dan schema.
- Belum ada alamat kantor publik yang akan dicantumkan.
- Belum banyak klien berbayar, sehingga portofolio memakai proyek dengan label status yang jujur.

---

## 2. Target Bisnis & Audiens

**Tujuan utama:** lead jasa pembuatan website dari Banyuwangi (Google, Maps, sosial, dan kanal organik lain), dikonversi lewat WhatsApp.

**Audiens:**
1. UMKM Banyuwangi
2. Pemilik bisnis lokal (jasa, kuliner, kopi, dll.)
3. Hotel, homestay, tour & travel
4. Perusahaan, organisasi, komunitas
5. Calon klien yang butuh website custom

**Positioning:**
> Jasa Pembuatan Website Profesional di Banyuwangi untuk UMKM dan Bisnis

**Value proposition:**
> Website cepat, responsif, dan SEO-ready, dirancang agar bisnis Banyuwangi lebih mudah ditemukan di Google dan dihubungi lewat WhatsApp.

Jangan menambahkan klaim yang tidak bisa dibuktikan (mis. "terbaik", "termurah", "pasti nomor 1", "garansi X hari") kecuali benar-benar ditawarkan dan tertulis di syarat layanan.

---

## 3. Identitas & Entity

| Item | Keputusan |
|---|---|
| Nama brand | OptiSitus |
| Domain | optisitus.web.id (kanonik: `https://optisitus.web.id/`) |
| Bentuk | Personal/freelancer (asumsi), tampil sebagai brand OptiSitus |
| Pemilik | `[NAMA PEMILIK]`, ditampilkan di halaman Tentang beserta foto dan pengalaman nyata |
| Telepon/WhatsApp | 081907019403 (format internasional `+6281907019403`) |
| Email | `[ISI EMAIL]` (wajib sebagai kanal cadangan) |
| Area layanan | Banyuwangi (utama), Jawa Timur (sekunder) |

**Konsistensi entity (wajib sama di semua tempat):** nama "OptiSitus" (perhatikan huruf besar O dan S), URL, nomor WhatsApp, deskripsi singkat, dan layanan. Berlaku di website, Google Business Profile, Bing Places, Instagram, LinkedIn, TikTok, Facebook, dan direktori.

**Catatan nama & domain:**
- Sebelum dipakai serius, cek ketersediaan nama di pencarian Google, akun sosial, dan pangkalan merek PDKI, agar tidak bentrok dengan pihak lain.
- `.web.id` sah dipakai. Pastikan akun registrar terverifikasi dan perpanjangan diatur. Bila anggaran memungkinkan, amankan juga `optisitus.com` atau `optisitus.id` dan arahkan dengan 301 ke domain utama (bukan dijadikan situs kembar).
- Pilih satu versi kanonik: `https://optisitus.web.id/` (tanpa `www`), dan arahkan `www` serta `http` ke versi itu dengan 301.

---

## 4. Arsitektur Website

### Fase 1 (wajib, semua berisi konten unik)

```text
/                              Home (juga halaman lokal utama)
/layanan/                      Hub layanan (+ ringkasan proses kerja)
/layanan/website-umkm/
/layanan/company-profile/
/portofolio/
/portofolio/[nama-proyek]/     2–3 studi kasus awal
/harga/
/tentang/
/kontak/
/kebijakan-privasi/
```

### Fase 2–3 (dibuat hanya jika kontennya unik)

```text
/layanan/landing-page/
/layanan/toko-online/
/layanan/website-custom/
/faq/
/blog/ dan artikel
/website-hotel-banyuwangi/ , /website-tour-travel-banyuwangi/ , /website-restoran-banyuwangi/
```

Sebelum halaman layanan tambahan jadi, layanan tersebut cukup disebut sebagai bagian di `/layanan/`.

### Prioritas

| Prioritas | Halaman | Tujuan |
|---|---|---|
| P0 | Home | Keyword lokal utama, brand, konversi |
| P0 | Layanan + Website UMKM + Company Profile | Commercial intent |
| P0 | Portofolio + studi kasus | Bukti dan trust |
| P0 | Harga | Budget intent |
| P1 | Tentang, Kontak, Kebijakan Privasi | Trust, entity, legal |
| P2 | FAQ, Blog, layanan tambahan, industry pages | Topical authority |

---

## 5. Keyword Mapping (satu halaman, satu intent)

| Halaman | Primary keyword | Intent |
|---|---|---|
| Home | jasa pembuatan website Banyuwangi + brand OptiSitus | Commercial lokal + navigasi brand |
| Layanan (hub) | layanan pembuatan website untuk bisnis | Commercial (umum) |
| Website UMKM | jasa website UMKM Banyuwangi | Commercial (segmen) |
| Company Profile | jasa website company profile Banyuwangi | Commercial (segmen) |
| Harga | harga jasa pembuatan website Banyuwangi | Budget/transactional |
| Portofolio | portofolio website (OptiSitus) | Trust/validasi |
| Tentang | OptiSitus, web developer Banyuwangi | Entity/trust |
| Landing Page (P2) | jasa landing page Banyuwangi | Commercial |
| Toko Online (P2) | jasa toko online Banyuwangi | Commercial |
| Website Custom (P2) | jasa website custom Banyuwangi | Commercial |
| Blog (P2) | pertanyaan informasional/lokal | Informational |

**Keyword sekunder untuk Home (dipakai natural, bukan diulang-ulang):** jasa website Banyuwangi, pembuatan website Banyuwangi, web developer Banyuwangi, jasa website profesional Banyuwangi.

Catatan ejaan: pakai **"portofolio"** di URL dan judul (ejaan baku), dan sebut "portfolio" sesekali di isi konten karena sebagian orang mengetik itu.

---

## 6. Struktur Konten Home (halaman lokal utama)

```text
H1: Jasa Pembuatan Website Banyuwangi untuk UMKM dan Bisnis

Hero: value proposition + tombol WhatsApp
Mengapa bisnis Banyuwangi butuh website? (2–3 paragraf, jawaban langsung)
Layanan yang ditawarkan (ringkas, link ke halaman layanan)
Portofolio pilihan (link ke studi kasus)
Kenapa memilih OptiSitus (hanya keunggulan yang bisa dibuktikan)
Proses kerja (langkah singkat)
Ringkasan harga (link ke /harga/)
Area layanan (daftar area yang benar-benar dilayani)
FAQ singkat (5–6 pertanyaan)
CTA WhatsApp
```

Konten harus informatif dan original, tanpa keyword stuffing. Tulis seperti menjelaskan ke pemilik usaha, bukan ke mesin pencari.

**Area layanan:** sebut hanya area yang memang kamu layani (contoh: Banyuwangi Kota, Giri, Glagah, Kalipuro, Licin, Rogojampi, Genteng, Muncar, Srono, Wongsorejo). Jangan membuat halaman per kecamatan dengan isi salinan. Satu bagian area layanan yang informatif sudah cukup; halaman `/area-layanan/` baru dibuat bila ada konten unik (mis. kasus klien per area).

---

## 7. Template & Technical SEO

### 7.1 Pembersihan template BootstrapMade (wajib)
- **Cek lisensi:** versi gratis BootstrapMade umumnya mewajibkan tautan kredit di footer. Pertahankan atau beli lisensi tanpa kredit; jangan dihapus begitu saja.
- Ganti semua teks, gambar, dan metadata demo (title, description, nama, alamat, nomor, tautan sosial palsu).
- Hapus meta `keywords` bawaan (tidak dipakai Google).
- Hapus library/plugin yang tidak dipakai (slider, animasi, isotope, counter, form PHP bawaan jika tidak dipakai). Muat hanya CSS/JS yang dipakai halaman tersebut.
- Kurangi jumlah font (maksimal 1–2 keluarga) dan idealnya host sendiri.
- Hapus file dan halaman demo yang tidak dipakai agar tidak ter-crawl.

### 7.2 HTML semantik
`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Satu `<h1>` per halaman, hierarki H2/H3 logis.

### 7.3 Metadata per halaman
Title unik, meta description unik, canonical absolut, Open Graph (+ gambar OG 1200×630), favicon, `lang="id"`, viewport. Twitter card opsional.

Format title: `[Keyword utama] | OptiSitus` (sekitar 50–60 karakter).

| Halaman | Title (contoh) | Meta description (contoh) |
|---|---|---|
| Home | Jasa Pembuatan Website Banyuwangi \| OptiSitus | Jasa pembuatan website untuk UMKM dan bisnis di Banyuwangi. Responsif, SEO-ready, mudah dihubungi lewat WhatsApp. Konsultasi dulu. |
| Layanan | Layanan Pembuatan Website Bisnis \| OptiSitus | Website UMKM, company profile, dan lainnya untuk bisnis di Banyuwangi. Lihat layanan OptiSitus dan cara kerjanya. |
| Harga | Harga Jasa Pembuatan Website Banyuwangi \| OptiSitus | Lihat paket dan kisaran harga pembuatan website di OptiSitus, apa saja yang termasuk, dan faktor yang memengaruhi biaya. |
| Portofolio | Portofolio Website \| OptiSitus | Contoh website yang dikerjakan OptiSitus beserta masalah, solusi, dan fitur di tiap proyek. |
| Tentang | Tentang OptiSitus \| Web Developer Banyuwangi | Kenali OptiSitus, siapa di baliknya, dan bagaimana website dibuat untuk bisnis di Banyuwangi. |
| Kontak | Kontak & Konsultasi Website \| OptiSitus | Hubungi OptiSitus lewat WhatsApp untuk konsultasi pembuatan website. |

Sesuaikan isi deskripsi dengan fakta akhir; jangan menjanjikan hal yang belum pasti.

### 7.4 Crawlability & indeks
- `robots.txt`, `sitemap.xml`, canonical, URL bersih (folder dengan `index.html` dan trailing slash konsisten), internal link kontekstual.
- Konten utama harus ada di HTML, bukan dirender lewat JavaScript.
- Redirect 301: `http` → `https`, `www` → non-`www`.
- Halaman 404 kustom yang memuat link ke Home dan WhatsApp.
- Daftarkan situs ke **Google Search Console** dan **Bing Webmaster Tools** (verifikasi domain), kirim sitemap di keduanya.
- Gunakan **IndexNow** bila hosting/pipeline memungkinkan, untuk memberi tahu mesin pencari yang mendukungnya saat halaman baru atau berubah.

### 7.5 Performa (mobile-first, jaringan seluler Indonesia)
Target Core Web Vitals (persentil ke-75, mobile): **LCP ≤ 2,5 dtk, INP ≤ 200 ms, CLS ≤ 0,1**.

- Gambar WebP/AVIF, ukuran sesuai tampilan, `width`/`height` eksplisit, `loading="lazy"` untuk gambar non-kritis (bukan untuk gambar LCP/hero).
- Minify CSS/JS, hindari JS yang tidak perlu, `preload` hanya untuk resource kritis.
- Anggaran awal (target internal): Home di bawah sekitar 1 MB transfer awal.
- Uji dengan PageSpeed Insights/Lighthouse di mode mobile sebelum dan sesudah publish.

### 7.6 Aksesibilitas
`alt` pada gambar informatif, kontras cukup, navigasi keyboard dan focus state, label pada form, `aria-label` untuk tombol ikon saja, heading logis, tautan/tombol yang jelas.

### 7.7 Keamanan
HTTPS wajib, dependensi dari sumber tepercaya (atau host sendiri), tanpa API key di sisi klien, security headers bila hosting mendukung, validasi input jika ada form, batasi script pihak ketiga.

---

## 8. Structured Data (JSON-LD)

Gunakan hanya data yang benar-benar tampil di halaman. Jangan mengarang alamat.

- **Home:** `Organization` + `WebSite`
- **Semua halaman dalam:** `BreadcrumbList`
- **Halaman layanan:** `Service` (provider = OptiSitus, `areaServed` = Banyuwangi)
- **Tentang:** `Person` untuk pemilik (jika mau tampil sebagai pribadi)
- **`LocalBusiness`/`ProfessionalService`:** hanya bila ada alamat dan data bisnis yang sah dan ditampilkan. Sampai saat itu, pakai `Organization`.
- FAQ schema boleh dipasang sebagai penanda struktur, tetapi **jangan berharap muncul rich result**; Google membatasinya untuk situs tertentu.

Contoh Organization (isi yang masih bertanda kurung siku sebelum publish):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OptiSitus",
  "url": "https://optisitus.web.id/",
  "logo": "https://optisitus.web.id/assets/img/logo.png",
  "telephone": "+6281907019403",
  "areaServed": { "@type": "AdministrativeArea", "name": "Banyuwangi, Jawa Timur" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+6281907019403",
    "availableLanguage": "Indonesian"
  },
  "sameAs": ["[URL INSTAGRAM]", "[URL LINKEDIN]"]
}
```

`sameAs` hanya diisi akun yang benar-benar ada. Validasi dengan Rich Results Test dan Schema Markup Validator.

---

## 9. AEO — Answer Engine Optimization

Tujuan: jawaban di website mudah dipahami dan dirujuk oleh hasil pencarian yang menjawab langsung, baik fitur AI maupun snippet.

**Format konten:**
- Heading berbentuk pertanyaan bila natural, diikuti **jawaban langsung 1–3 kalimat**, baru penjelasan rinci.
- Sertakan angka dan fakta yang bisa diverifikasi (harga, durasi, apa yang termasuk).
- Gunakan tabel atau daftar untuk perbandingan (mis. landing page vs company profile).
- Tambahkan pengalaman nyata dan studi kasus; hindari klaim tanpa bukti.
- Tanggal "diperbarui" yang jujur pada artikel.

**Contoh (isi angka setelah harga final):**

> **Berapa biaya pembuatan website di Banyuwangi?**  
> Biaya pembuatan website di OptiSitus mulai dari Rp `[ISI]` untuk paket Starter. Harga dipengaruhi jenis website, jumlah halaman, fitur, dan kebutuhan integrasi. Rincian tiap paket ada di halaman Harga.

**Pertanyaan prioritas yang harus terjawab di situs:** biaya, durasi pengerjaan, apa yang termasuk (domain/hosting/revisi), perbedaan jenis website, apakah bisa untuk UMKM kecil, cara pembayaran/alur kerja, dan apa yang terjadi setelah website jadi (maintenance).

---

## 10. GEO — Generative Engine Optimization

Panduan resmi Google menyatakan bahwa untuk tampil di AI Overviews dan AI Mode **tidak ada persyaratan tambahan atau optimasi khusus**, dan tidak perlu file atau markup khusus AI. Halaman cukup terindeks dan layak tampil sebagai snippet, dengan fondasi yang sama: crawling diizinkan, konten bermanfaat, page experience baik, structured data akurat. Google juga menyebut fitur AI dapat memakai teknik "query fan-out" (banyak pencarian terkait sekaligus), sehingga **cakupan subtopik yang lengkap di satu situs** membantu.

Yang bisa dikerjakan secara praktis:

1. **Entity konsisten:** OptiSitus → jasa pembuatan website → Banyuwangi → Jawa Timur → jenis website. Nama, nomor, URL, dan deskripsi sama di semua profil.
2. **Jawaban langsung dan bukti:** studi kasus nyata, harga transparan, FAQ yang menjawab pertanyaan sebenarnya.
3. **Ekosistem profil:** Google Business Profile (bila memenuhi syarat), Bing Places, Instagram, LinkedIn, TikTok/Facebook. Tautkan lewat `sameAs` dan dari footer.
4. **Bing:** verifikasi di Bing Webmaster Tools dan kirim sitemap, karena sebagian pencarian berbasis AI memakai indeks Bing.
5. **Kebijakan crawler:** untuk bisnis yang ingin ditemukan, biarkan `robots.txt` mengizinkan crawling umum. Bila kelak ingin membatasi penggunaan konten untuk pelatihan model, atur per user-agent secara sadar, bukan memblokir semuanya.
6. **Pantau:** Search Console memiliki laporan performa AI (diperkenalkan sekitar Juni 2026 menurut pemberitaan industri; cek apakah sudah tersedia di akunmu). Catat juga manual: cari pertanyaan target di Google (AI Overviews/AI Mode) dan asisten AI lain tiap bulan dan lihat apakah OptiSitus disebut atau dirujuk.
7. **`llms.txt`:** opsional, bukan faktor ranking dan tidak dibutuhkan Google. Jangan habiskan waktu di sini sebelum hal di atas selesai.

---

## 11. Local SEO

### Google Business Profile
Buat dan verifikasi bila memenuhi syarat, sebagai **bisnis area layanan** jika tidak membuka tempat untuk tamu:
- Nama bisnis sesuai nama sebenarnya (OptiSitus), tanpa menyelipkan keyword
- Kategori yang sesuai (pengembang/desainer web)
- Area layanan sesuai kenyataan (Banyuwangi dan sekitarnya)
- Website, telepon, jam operasional, deskripsi, foto
- Review asli dari klien nyata

Jangan memakai alamat palsu atau alamat virtual untuk lolos verifikasi. Jika belum memenuhi syarat, tunda, dan fokus pada Bing Places serta direktori lain.

### Sitasi & profil lokal
Direktori bisnis yang relevan, komunitas pelaku usaha dan developer lokal, kampus, dan organisasi UMKM setempat. Data (nama, nomor, URL) harus persis sama di semua tempat.

---

## 12. Portofolio & Studi Kasus

Setiap proyek punya halaman detail `/portofolio/[nama-proyek]/`.

**Label status (wajib, supaya jujur):**
- **Proyek klien** (ada izin menampilkan)
- **Proyek kolaborasi/tim**
- **Proyek mandiri/latihan**

**Struktur studi kasus:**

```text
Nama proyek + label status
Industri dan lokasi (jika klien)
Permasalahan
Solusi
Fitur
Teknologi
Screenshot (WebP, dengan alt)
Hasil yang dapat dibuktikan (jika tidak ada data, tulis apa yang dikerjakan, bukan angka karangan)
Link live / repositori bila ada
CTA WhatsApp
```

Target awal: 2–3 studi kasus yang lengkap, lebih baik daripada banyak kartu proyek yang tipis. Minta izin tertulis (chat WhatsApp cukup) sebelum menampilkan nama klien.

---

## 13. Harga

Halaman `/harga/` **tidak boleh publish dengan "Rp X"**. Isi sebelum rilis:

| Paket | Isi | Harga |
|---|---|---|
| Starter | Jumlah halaman, responsive, basic SEO, revisi | Mulai dari Rp `[ISI]` |
| Business | Tambahan halaman/fitur | Mulai dari Rp `[ISI]` |
| Professional | Fitur lanjut/integrasi | Mulai dari Rp `[ISI]` |
| Custom | Sesuai kebutuhan | Konsultasi via WhatsApp |

Jelaskan per paket: jumlah halaman, responsive, domain/hosting (termasuk atau tidak, dan berapa tahun), basic SEO, jumlah revisi, maintenance, dan biaya tambahan. Sertakan bagian "faktor yang memengaruhi harga" dan FAQ biaya. Setiap paket punya tombol WhatsApp dengan pesan yang menyebut nama paket.

---

## 14. Strategi Konversi WhatsApp

Nomor: **081907019403** → format link `https://wa.me/6281907019403` (tanpa `+`, tanpa spasi, tanpa `0` di depan).

Pesan otomatis harus di-URL-encode. Contoh per halaman:

| Halaman | Link |
|---|---|
| Home | `https://wa.me/6281907019403?text=Halo%20OptiSitus%2C%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website.` |
| Website UMKM | `https://wa.me/6281907019403?text=Halo%20OptiSitus%2C%20saya%20tertarik%20membuat%20website%20untuk%20UMKM%20saya.` |
| Company Profile | `https://wa.me/6281907019403?text=Halo%20OptiSitus%2C%20saya%20ingin%20membuat%20website%20company%20profile.` |
| Harga | `https://wa.me/6281907019403?text=Halo%20OptiSitus%2C%20saya%20ingin%20menanyakan%20paket%20dan%20harga%20pembuatan%20website.` |
| Kontak | `https://wa.me/6281907019403?text=Halo%20OptiSitus%2C%20saya%20ingin%20bertanya%20tentang%20pembuatan%20website.` |

**Penempatan:** tombol di hero, di akhir tiap bagian penting, di halaman harga per paket, tombol melayang (floating) di mobile dengan `aria-label` jelas, dan di footer. Jangan menutupi konten dan jangan memunculkan pop-up mengganggu.

**Kanal cadangan:** tampilkan email (`mailto:`) di halaman Kontak dan footer, untuk pengunjung yang tidak ingin langsung chat.

**Tracking:** tiap tombol diberi atribut data (mis. `data-cta-position`, `data-service`) dan memicu event GA4 `whatsapp_click` dengan parameter `page`, `cta_position`, `service`. Di GA4 tandai `whatsapp_click` sebagai key event.

---

## 15. Funnel

```text
Google / Maps / Bing / Sosial
        ↓
Home (value proposition)
        ↓
Portofolio → Layanan → Harga
        ↓
Trust (tentang, FAQ, studi kasus)
        ↓
Klik WhatsApp
        ↓
Konsultasi → Lead berkualitas → Klien
```

---

## 16. Strategi Konten (Fase 2–3)

Target 20–30 artikel berkualitas, bukan produksi massal artikel AI. Setiap artikel: jawaban langsung di atas, pengalaman/data nyata, dan link kontekstual ke halaman layanan atau harga.

**Enam artikel pertama (prioritas):**
1. Berapa biaya pembuatan website di Banyuwangi?
2. Cara memilih jasa pembuatan website di Banyuwangi
3. Apakah UMKM Banyuwangi butuh website? (website vs Instagram)
4. Apa saja yang harus ada di website UMKM?
5. Landing page vs website company profile
6. Berapa lama pembuatan website dari awal sampai jadi?

**Klaster lanjutan:** digitalisasi UMKM Banyuwangi; website untuk hotel/homestay, tour & travel, bisnis kopi, dan kuliner Banyuwangi.

Catatan teknis: dengan HTML murni, artikel dan header/footer yang diulang mudah tidak konsisten. Sebelum blog dimulai, putuskan apakah tetap HTML manual (dengan checklist template) atau memakai generator statis (output tetap HTML). Untuk Fase 1 yang hanya sekitar 10 halaman, HTML murni sudah cukup.

---

## 17. Internal Linking

```text
Home ─→ Layanan ─→ Website UMKM / Company Profile
  │                      ↓
  │                Studi kasus terkait ─→ Harga ─→ WhatsApp
  └─→ Portofolio ─→ Studi kasus
Artikel blog ─→ halaman layanan relevan + Harga
```

Gunakan teks tautan deskriptif (bukan "klik di sini"). Setiap halaman dapat dicapai dalam maksimal 3 klik dari Home dan masuk ke sitemap.

---

## 18. Backlink & Otoritas

Fokus pada yang sah dan relevan: direktori bisnis relevan, komunitas dan organisasi lokal, kampus, event lokal, media lokal, atribusi klien/partner yang disepakati (mis. kredit "Website oleh OptiSitus" di footer situs klien dengan izin), dan profil developer.

Hindari: PBN, link farm, backlink otomatis massal, spam komentar, dan tautan berbayar yang melanggar pedoman.

---

## 19. Review

Minta review dari klien nyata setelah proyek selesai, tanpa mengarahkan isinya. Contoh permintaan:

> Jika berkenan, ceritakan pengalaman Anda mengenai komunikasi, proses pengerjaan, dan hasil website. Terima kasih.

Tampilkan review hanya jika asli dan ada izin. Jangan membuat review palsu.

---

## 20. Analytics & Pengukuran

**Alat:** Google Search Console, Bing Webmaster Tools, GA4, Clarity (opsional).

**KPI SEO:** impresi, klik, CTR, halaman terindeks, cakupan query, query brand vs non-brand, visibilitas query lokal.  
**KPI konversi:** `whatsapp_click` per halaman, conversion rate, jumlah lead berkualitas, jumlah klien.  
**KPI AI/GEO:** laporan AI di Search Console (jika tersedia) dan pengecekan manual bulanan.

**Privasi:** karena memakai analytics, sediakan halaman `/kebijakan-privasi/` yang menjelaskan data apa yang dikumpulkan dan untuk apa, sesuai UU Pelindungan Data Pribadi. Ini bukan nasihat hukum; konsultasikan bila perlu.

---

## 21. `robots.txt` dan Sitemap

`robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://optisitus.web.id/sitemap.xml
```

`sitemap.xml` memuat hanya URL kanonik yang ingin diindeks, dengan `lastmod` yang akurat. Fase 1:

```text
https://optisitus.web.id/
https://optisitus.web.id/layanan/
https://optisitus.web.id/layanan/website-umkm/
https://optisitus.web.id/layanan/company-profile/
https://optisitus.web.id/portofolio/
https://optisitus.web.id/portofolio/[nama-proyek]/
https://optisitus.web.id/harga/
https://optisitus.web.id/tentang/
https://optisitus.web.id/kontak/
https://optisitus.web.id/kebijakan-privasi/
```

---

## 22. Acceptance Criteria SEO (per halaman)

```text
[ ] Title unik (format: keyword | OptiSitus)
[ ] Meta description unik
[ ] Satu H1, hierarki H2/H3 logis
[ ] Canonical absolut ke https://optisitus.web.id/...
[ ] Open Graph + gambar OG
[ ] Alt pada gambar informatif
[ ] Internal link kontekstual (minimal 2)
[ ] Structured data sesuai tipe halaman, lolos validator
[ ] Responsif dan nyaman di mobile
[ ] LCP/INP/CLS masuk target
[ ] CTA WhatsApp dengan pesan sesuai halaman + event tracking
[ ] Tidak ada teks/gambar/tautan demo template yang tersisa
[ ] Masuk sitemap
```

---

## 23. PRD

**Nama produk:** OptiSitus — Jasa Pembuatan Website Banyuwangi  
**Jenis:** Website lead generation lokal  
**Platform:** HTML5 + CSS3 + Bootstrap (BootstrapMade) + JavaScript ringan  
**Domain:** https://optisitus.web.id  
**Pasar utama:** Banyuwangi; **sekunder:** Jawa Timur  
**Konversi utama:** klik WhatsApp 081907019403  
**Bahasa:** Indonesia

### Functional Requirements

| ID | Requirement | Acceptance |
|---|---|---|
| FR-01 | Pengunjung melihat layanan | `/layanan/` dan 2 halaman layanan memuat isi unik |
| FR-02 | Pengunjung melihat portofolio | Daftar proyek dengan label status dan link ke detail |
| FR-03 | Pengunjung melihat studi kasus | Minimal 2 halaman detail sesuai struktur di bagian 12 |
| FR-04 | Pengunjung melihat harga | Paket berisi angka "mulai dari" dan rincian isi |
| FR-05 | Pengunjung menghubungi via WhatsApp | Link `wa.me` benar, pesan ter-encode, terbuka di mobile dan desktop |
| FR-06 | Kanal cadangan tersedia | Email tampil di Kontak dan footer |
| FR-07 | Pengunjung membaca FAQ | Bagian FAQ di Home dan halaman harga; `/faq/` di Fase 2 |
| FR-08 | Pengunjung membaca artikel | Blog di Fase 2–3 |
| FR-09 | Situs responsif | Teruji di lebar 360, 768, 1280 px |
| FR-10 | Tracking klik WhatsApp | Event `whatsapp_click` tercatat dengan parameter |
| FR-11 | Situs dapat di-crawl | `robots.txt`, `sitemap.xml`, canonical, redirect 301 berfungsi |
| FR-12 | Structured data tersedia | Organization, WebSite, BreadcrumbList, Service tervalidasi |
| FR-13 | Kebijakan privasi tersedia | Tautan di footer semua halaman |

### Non-functional Requirements

- **Performa:** mobile-first; LCP ≤ 2,5 dtk, INP ≤ 200 ms, CLS ≤ 0,1; aset dioptimalkan.
- **Aksesibilitas:** semantik, alt, keyboard, kontras memadai.
- **SEO:** crawlable, indexable, canonical, sitemap, schema, internal link.
- **Keamanan:** HTTPS, dependensi tepercaya, tanpa secret di klien, security headers bila memungkinkan.
- **Konten:** original, jujur, tanpa klaim yang tidak bisa dibuktikan.

### Open Items (harus dipasok sebelum publish)

| Item | Status |
|---|---|
| Nama pemilik dan foto untuk halaman Tentang | Belum |
| Email kontak | Belum |
| Harga tiap paket | Belum |
| 2–3 studi kasus (teks + screenshot + izin tampil) | Belum |
| Logo dan favicon OptiSitus | Belum |
| Akun sosial (Instagram/LinkedIn/dll.) dengan nama seragam | Belum |
| Hosting statis + HTTPS untuk optisitus.web.id | Belum |
| Akun GA4, Search Console, Bing Webmaster Tools | Belum |
| Keputusan lisensi BootstrapMade (kredit footer atau lisensi berbayar) | Belum |
| Keputusan GBP: memenuhi syarat atau tidak | Belum |

---

## 24. Roadmap

**Fase 1 — Fondasi (minggu 1–3):** pembersihan template, Home, Layanan (+2 halaman layanan), Portofolio (+2–3 studi kasus), Harga, Tentang, Kontak, Kebijakan Privasi, technical SEO, schema, sitemap, robots, WhatsApp CTA + tracking, Search Console + Bing.

**Fase 2 — Lokal (bulan 1–2):** Google Business Profile bila eligible, Bing Places, profil sosial seragam, sitasi lokal, pengumpulan review asli, `/faq/`, layanan tambahan yang kontennya unik.

**Fase 3 — Topical authority (bulan 2–6):** 20–30 artikel berkualitas dimulai dari enam prioritas, studi kasus tambahan, halaman industri yang punya bukti nyata.

**Fase 4 — Otoritas (berkelanjutan):** mention lokal, kemitraan, backlink relevan, PR digital ringan.

**Rutinitas bulanan:** cek Search Console (query, halaman, AI report bila ada), cek kecepatan, perbarui portofolio dan harga, catat lead dari WhatsApp (dari mana mereka tahu OptiSitus), cek sebutan di hasil AI.

---

## 25. Launch Checklist

```text
[ ] Domain aktif, HTTPS, redirect http→https dan www→non-www
[ ] Semua teks/gambar/tautan demo template sudah diganti
[ ] Tidak ada "noindex" yang tertinggal dari masa pengembangan
[ ] Semua link WhatsApp diuji di ponsel
[ ] Event whatsapp_click tercatat di GA4 (DebugView)
[ ] robots.txt dan sitemap.xml dapat diakses
[ ] Sitemap dikirim ke Search Console dan Bing
[ ] Schema lolos validator
[ ] PageSpeed mobile diuji di Home dan satu halaman dalam
[ ] Halaman 404 kustom
[ ] Kebijakan privasi dan kredit template (bila diwajibkan) terpasang
[ ] Nama, nomor, URL identik di semua profil
```

---

## 26. Anti-pattern

- Keyword stuffing, doorway page, halaman kecamatan hasil salin
- Review palsu, alamat palsu, klaim "nomor 1" tanpa bukti
- Artikel AI massal tanpa nilai tambah
- Backlink spam
- Membuat dua halaman untuk keyword dan intent yang sama
- Menunda konten inti sambil sibuk mengurus `llms.txt` atau schema berlebihan
- Mengandalkan FAQ schema untuk rich result
- Membiarkan template demo dan script yang tidak dipakai

---

## 27. Prinsip Utama

Tidak ada teknik tunggal yang bisa "memaksa" Google atau mesin AI memberi posisi tertentu. Fondasinya:

**search intent yang jelas + konten original + relevansi lokal + kualitas teknis + entity yang konsisten + portofolio nyata + trust + konversi yang mudah.**

Dengan itu, OptiSitus bisa tumbuh sebagai aset bisnis jangka panjang, bukan sekadar halaman yang mengejar satu keyword.
