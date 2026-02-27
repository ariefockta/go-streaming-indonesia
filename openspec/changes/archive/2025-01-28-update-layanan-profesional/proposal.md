## Why

Website perlu diupdate untuk meningkatkan SEO, kredibilitas, dan user experience. Perubahan meliputi: penggantian gambar dengan dokumentasi proyek asli, perbaikan caption untuk SEO, penambahan spesifikasi peralatan, update portfolio dengan horizontal scroll, testimonial dari client perusahaan dengan animasi, dan perbaikan footer.

## What Changes

### Layanan Profesional
- Update caption Produksi Multikamera: "broadcast televisi" → "broadcast profesional"
- Ganti gambar Multicam dengan `/public/multicam.jpeg`
- Ganti gambar LED Videotron dengan `/public/led.jpeg` + keyword "sewa videotron" untuk SEO
- Update headline Photobooth: "Photobooth 360 & AI" → "Photobooth Cetak dan Videobooth 360"
- Tambahkan spesifikasi peralatan lengkap:
  - Sony PXW Z190 4K
  - Switcher DataVideo HS1300
  - Wireless Video System Hollyland
  - Clearcomm Hollyland

### Portfolio (Dokumentasi Proyek)
- Ubah layout dari grid vertikal menjadi **horizontal scroll 2 baris**
- Tambahkan 18 foto total:
  - 4 foto dari `/public/multicam/`
  - 3 foto dari `/public/LED videotron/`
  - 11 foto dari `/public/projects/`
- Tambahkan filter kategori: Semua, Siaran Langsung, LED Videotron, Booth
- Implementasi filter dengan `data-category` attribute

### Testimonial (Apa Kata Mereka)
- Ubah dari grid 3 kolom menjadi **horizontal scroll dengan animasi infinite loop**
- Update testimonial dengan 9 client perusahaan:
  - Format: Nama orang (bold) + Nama perusahaan (di bawah)
  - Kementerian PUPR, Pertamina, Pemkot Balikpapan, Waskita Karya, Adhi Karya, Kementerian Keuangan, Hutama Karya, Pemprov Kaltim, Kementerian Kominfo
- Tambahkan animasi auto-scroll (pause on hover)
- Hilangkan scrollbar dengan `overflow-hidden`

### Footer
- Update nomor telepon menjadi **WhatsApp link** dengan icon WhatsApp SVG
- Tambahkan "Lighting System" ke daftar layanan
- Format nomor: +62 853-9313-2410

### Kontak Section
- Update Google Maps embed dengan lokasi lebih akurat + marker/pin

### JavaScript
- Tambahkan portfolio filter script langsung di `index.html` dengan `DOMContentLoaded`
- Filter menggunakan `classList.add/remove('hidden')` untuk kompatibilitas Tailwind

## Capabilities

### New Capabilities

- Portfolio filter system dengan 4 kategori (Semua, Siaran Langsung, LED Videotron, Booth)
- Horizontal scroll layout untuk portfolio (2 baris, 18 foto)
- Testimonial auto-scroll animation dengan infinite loop
- WhatsApp direct link di footer

### Modified Capabilities

- `layanan-profesional`: Update captions, images, headlines, dan spesifikasi peralatan untuk SEO dan transparansi
- `portfolio`: Layout horizontal scroll dengan filter kategori
- `testimonial`: Animasi auto-scroll dengan 9 testimonial dari client perusahaan
- `footer`: WhatsApp link + icon, tambah Lighting System ke layanan
- `kontak`: Google Maps dengan marker/pin lokasi akurat

## Impact

- **Files affected**: 
  - `index.html`:
    - Layanan Profesional section (captions, images, spesifikasi)
    - Portfolio section (horizontal scroll, 18 foto, filter)
    - Testimonial section (animasi, 9 testimonial)
    - Footer (WhatsApp link, Lighting System)
    - Kontak section (Google Maps update)
    - Inline JavaScript untuk portfolio filter
  - `script.js`: Update portfolio filter logic
  - Image references:
    - `/public/multicam.jpeg` untuk Multicam service
    - `/public/led.jpeg` untuk LED Videotron service
    - 4 images dari `/public/multicam/`
    - 3 images dari `/public/LED videotron/`
    - 11 images dari `/public/projects/`

- **SEO improvement**: 
  - Keyword "sewa videotron" di LED Videotron section
  - Authentic project documentation untuk kredibilitas
  - Alt text yang lebih descriptive

- **User experience**: 
  - Horizontal scroll untuk portfolio (tidak terlalu panjang)
  - Auto-scroll testimonial dengan pause on hover
  - Filter portfolio untuk navigasi mudah
  - WhatsApp direct link untuk konversi lebih baik
  - No scrollbar pada testimonial (cleaner UI)

- **Credibility**: 
  - Real project photos dari client
  - Testimonial dari 9 perusahaan besar
  - Transparent equipment specifications

- **No breaking changes**: Core functionality tetap sama, hanya enhancement
