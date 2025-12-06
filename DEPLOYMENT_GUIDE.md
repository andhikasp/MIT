# Panduan Deployment ke Unaux

## ⚠️ Catatan Penting

Unaux adalah hosting gratis yang **tidak mendukung Node.js secara native**. Untuk project Next.js ini, ada 2 opsi:

### Opsi 1: Static Export (Recommended untuk Unaux)

Mengubah Next.js menjadi static site yang bisa dihosting di Unaux.

#### Langkah-langkah:

1. **Update `next.config.js` untuk static export:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
```

2. **Build project:**
```bash
npm run build
```

3. **Upload folder `out/` ke Unaux:**
   - Login ke Unaux
   - Upload semua file dari folder `out/` ke folder `public_html` atau `www`
   - Pastikan file `index.html` ada di root

4. **Keterbatasan:**
   - ❌ API routes tidak akan bekerja (form email tidak akan berfungsi)
   - ❌ Server-side rendering tidak tersedia
   - ✅ Hanya static pages yang akan bekerja

---

### Opsi 2: Gunakan Platform yang Mendukung Next.js

#### **Rekomendasi: Vercel (GRATIS & TERBAIK untuk Next.js)**

Vercel dibuat oleh tim Next.js, jadi sangat optimal:

1. **Daftar di [Vercel.com](https://vercel.com)**
2. **Import project dari GitHub/GitLab/Bitbucket**
3. **Vercel akan auto-detect Next.js dan deploy otomatis**
4. **Tambahkan Environment Variables:**
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`

**Keuntungan Vercel:**
- ✅ Gratis untuk personal projects
- ✅ Auto-deploy dari Git
- ✅ SSL certificate gratis
- ✅ CDN global
- ✅ Semua fitur Next.js bekerja (API routes, SSR, dll)

#### **Alternatif Lain:**

- **Netlify** - Gratis, mudah digunakan
- **Railway** - Gratis tier tersedia
- **Render** - Gratis untuk static sites
- **AWS Amplify** - Gratis tier tersedia

---

## 📝 Setup untuk Unaux (Static Export)

Jika tetap ingin menggunakan Unaux dengan static export:

1. Update `next.config.js` seperti di atas
2. Build: `npm run build`
3. Upload folder `out/` ke Unaux
4. **Catatan:** Form contact tidak akan mengirim email (perlu backend)

---

## 🚀 Setup untuk Vercel (Recommended)

1. Push code ke GitHub
2. Login ke Vercel
3. Import project
4. Add environment variables
5. Deploy!

**Semua fitur akan bekerja termasuk form email!**

