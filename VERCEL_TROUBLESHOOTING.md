# 🔧 Troubleshooting Vercel Deployment

## ✅ Perbaikan yang Sudah Dilakukan

1. ✅ **Menghapus script build yang tidak cross-platform** dari `package.json`
2. ✅ **Menambahkan validasi environment variables** di API route
3. ✅ **Menambahkan sanitization** untuk keamanan email
4. ✅ **Membuat `vercel.json`** untuk konfigurasi
5. ✅ **Membuat `.vercelignore`** untuk exclude file yang tidak perlu

---

## 🚀 Langkah-langkah Deploy Ulang

### 1. Commit dan Push Perubahan

```bash
git add .
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

### 2. Deploy di Vercel

1. **Buka Vercel Dashboard:** https://vercel.com/dashboard
2. **Pilih project Anda**
3. **Klik "Redeploy"** atau tunggu auto-deploy dari Git push

---

## ⚙️ Setup Environment Variables

**PENTING:** Tambahkan environment variables di Vercel sebelum deploy!

1. **Di Vercel Dashboard:**
   - Pilih project → Settings → Environment Variables

2. **Tambahkan variables berikut:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=info@pt-moxelindogroup.com
   ```

3. **Untuk Production, Preview, dan Development:**
   - Centang semua environment (Production, Preview, Development)
   - Klik "Save"

---

## 🔍 Troubleshooting Common Issues

### Issue 1: Build Fails dengan Error "Module not found"

**Solusi:**
- Pastikan semua dependencies ada di `package.json`
- Hapus `node_modules` dan `.next` folder
- Push ulang ke GitHub

### Issue 2: Build Fails dengan TypeScript Errors

**Solusi:**
- Run `npm run lint` di local untuk cek errors
- Fix semua TypeScript errors sebelum push

### Issue 3: API Route Returns 500 Error

**Solusi:**
- Pastikan semua environment variables sudah di-set di Vercel
- Cek Vercel logs untuk detail error
- Pastikan SMTP credentials valid

### Issue 4: Build Timeout

**Solusi:**
- Hapus file yang tidak perlu dari repository
- Pastikan `.vercelignore` sudah benar
- Cek apakah ada file besar yang tidak perlu

---

## 📋 Checklist Sebelum Deploy

- [ ] Semua environment variables sudah di-set di Vercel
- [ ] Tidak ada TypeScript errors (`npm run lint`)
- [ ] Semua dependencies terinstall (`npm install`)
- [ ] Build berhasil di local (meskipun ada permission error, itu OK)
- [ ] Code sudah di-push ke GitHub
- [ ] Vercel sudah terhubung dengan GitHub repository

---

## 🆘 Jika Masih Error

1. **Cek Vercel Build Logs:**
   - Di Vercel Dashboard → Deployments → Pilih deployment terbaru
   - Scroll ke bawah untuk lihat build logs
   - Copy error message yang muncul

2. **Cek Environment Variables:**
   - Pastikan semua variables sudah di-set
   - Pastikan tidak ada typo

3. **Cek GitHub Repository:**
   - Pastikan semua file sudah di-push
   - Pastikan `.gitignore` tidak exclude file penting

---

## 💡 Tips

- **Vercel auto-deploys** setiap kali Anda push ke GitHub
- **Environment variables** harus di-set manual di Vercel dashboard
- **Build logs** di Vercel sangat detail, gunakan untuk debugging
- **Preview deployments** dibuat untuk setiap pull request

---

## 📞 Next Steps

Setelah deploy berhasil:
1. Test semua halaman
2. Test form contact (pastikan email terkirim)
3. Test language switcher
4. Test responsive design
5. Test WhatsApp button

Jika masih ada masalah, share error message dari Vercel build logs!

