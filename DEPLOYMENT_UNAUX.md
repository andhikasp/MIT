# 🚀 Panduan Deploy ke Unaux

## ⚠️ PENTING: Keterbatasan Unaux

Unaux **tidak mendukung Node.js**, jadi:
- ❌ **Form contact TIDAK akan mengirim email** (perlu backend/API)
- ❌ Server-side rendering tidak tersedia
- ✅ Hanya static pages yang bekerja

---

## 📋 Langkah-langkah Deploy ke Unaux

### 1. Persiapan Project

**A. Ganti konfigurasi Next.js untuk static export:**

```bash
# Backup config lama
cp next.config.js next.config.backup.js

# Ganti dengan config untuk Unaux
cp next.config.unaux.js next.config.js
```

**B. Build project:**

```bash
npm run build
```

Setelah build selesai, akan ada folder `out/` yang berisi semua file static.

### 2. Upload ke Unaux

1. **Login ke Unaux:**
   - Buka https://unaux.com
   - Login ke akun Anda

2. **Akses File Manager:**
   - Masuk ke cPanel atau File Manager
   - Buka folder `public_html` atau `www`

3. **Upload File:**
   - **Hapus semua file lama** di `public_html` (jika ada)
   - **Upload semua file dari folder `out/`** ke `public_html`
   - Pastikan struktur seperti ini:
     ```
     public_html/
     ├── index.html
     ├── _next/
     ├── images/
     └── ... (file lainnya)
     ```

4. **Set Permissions:**
   - Pastikan file `index.html` bisa diakses (permission 644)
   - Folder `_next` permission 755

### 3. Verifikasi

- Buka website Anda di browser
- Test semua halaman
- **Catatan:** Form contact tidak akan bekerja (perlu backend)

---

## 🔧 Alternatif: Gunakan Vercel (RECOMMENDED)

Vercel adalah platform **GRATIS** yang dibuat khusus untuk Next.js:

### Keuntungan Vercel:
- ✅ **100% GRATIS** untuk personal projects
- ✅ Semua fitur Next.js bekerja (API routes, SSR, dll)
- ✅ **Form email akan bekerja!**
- ✅ Auto-deploy dari GitHub
- ✅ SSL certificate gratis
- ✅ CDN global (super cepat)

### Cara Deploy ke Vercel:

1. **Push code ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Buka https://vercel.com
   - Login dengan GitHub
   - Klik "New Project"
   - Import repository Anda
   - Vercel akan auto-detect Next.js

3. **Setup Environment Variables:**
   - Di Vercel dashboard, masuk ke Settings > Environment Variables
   - Tambahkan:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `CONTACT_EMAIL`

4. **Deploy!**
   - Klik "Deploy"
   - Tunggu beberapa menit
   - Website Anda akan live!

---

## 📝 Checklist Sebelum Deploy

- [ ] Test semua halaman di local (`npm run dev`)
- [ ] Pastikan semua gambar ada di folder `public/`
- [ ] Cek environment variables (jika pakai Vercel)
- [ ] Test form contact (jika pakai Vercel)
- [ ] Cek responsive design di mobile
- [ ] Test language switcher

---

## 🆘 Troubleshooting

### Problem: Website tidak muncul di Unaux
- **Solusi:** Pastikan `index.html` ada di root `public_html`
- Cek file permissions (644 untuk file, 755 untuk folder)

### Problem: Images tidak muncul
- **Solusi:** Pastikan folder `public/` sudah di-upload dengan benar
- Cek path images di code (harus mulai dengan `/`)

### Problem: 404 error di halaman tertentu
- **Solusi:** Pastikan semua file dari folder `out/` sudah di-upload
- Cek struktur folder di server

---

## 💡 Rekomendasi

**Untuk project Next.js ini, saya sangat merekomendasikan Vercel karena:**
1. Gratis dan mudah
2. Semua fitur bekerja (termasuk form email)
3. Auto-deploy dari Git
4. Performa lebih baik

**Unaux hanya cocok jika:**
- Anda hanya butuh static pages
- Tidak perlu form yang mengirim email
- Budget sangat terbatas

