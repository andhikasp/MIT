# 🚀 Panduan Setup Vercel Setelah Push

## ✅ Langkah-langkah Setelah Push ke GitHub

### 1. **Auto-Deploy (Otomatis)**

Setelah Anda push code ke GitHub:
- ✅ Vercel akan **otomatis mendeteksi** perubahan
- ✅ Vercel akan **otomatis memulai build** (tidak perlu klik apa-apa)
- ⏱️ Proses build biasanya memakan waktu **2-5 menit**

### 2. **Cek Status Deployment**

1. **Buka Vercel Dashboard:**
   - Kunjungi: https://vercel.com/dashboard
   - Login dengan akun GitHub Anda

2. **Lihat Deployment:**
   - Klik pada **project Anda** (MIT)
   - Anda akan melihat daftar deployments
   - Deployment terbaru akan muncul di paling atas
   - Status akan menunjukkan:
     - 🟡 **Building** - Sedang build
     - 🟢 **Ready** - Berhasil deploy
     - 🔴 **Error** - Ada error

3. **Cek Build Logs:**
   - Klik pada deployment yang sedang build
   - Scroll ke bawah untuk melihat **Build Logs**
   - Jika ada error, error message akan muncul di sini

---

## ⚙️ Setup Environment Variables (PENTING!)

**Jika belum setup environment variables untuk email:**

1. **Di Vercel Dashboard:**
   - Pilih project → **Settings** → **Environment Variables**

2. **Tambahkan Variables:**
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASS = your-app-password
   CONTACT_EMAIL = info@pt-moxelindogroup.com
   ```

3. **Pilih Environment:**
   - Centang **Production**
   - Centang **Preview** (optional)
   - Centang **Development** (optional)

4. **Klik "Save"**

5. **Redeploy:**
   - Setelah save, klik **Deployments** tab
   - Klik **"..."** pada deployment terbaru
   - Pilih **"Redeploy"**
   - Atau tunggu deployment berikutnya (auto-redeploy setelah environment variables diubah)

---

## 🔍 Troubleshooting

### Jika Build Gagal:

1. **Cek Build Logs:**
   - Buka deployment yang gagal
   - Scroll ke bawah untuk lihat error message
   - Copy error message lengkap

2. **Common Issues:**
   - ❌ **ESLint errors** → Sudah di-handle dengan `ignoreDuringBuilds: true`
   - ❌ **Missing dependencies** → Pastikan semua ada di `package.json`
   - ❌ **TypeScript errors** → Fix semua TypeScript errors
   - ❌ **Environment variables** → Pastikan sudah di-set (jika diperlukan)

3. **Fix dan Push Ulang:**
   - Fix error di local
   - Commit dan push ulang
   - Vercel akan auto-deploy ulang

---

## 🌐 Mengakses Website

Setelah deployment berhasil:

1. **URL Production:**
   - Vercel akan memberikan URL otomatis
   - Format: `https://your-project-name.vercel.app`
   - Atau custom domain jika sudah setup

2. **Cek Website:**
   - Buka URL di browser
   - Test semua halaman
   - Test form contact (jika environment variables sudah di-set)

---

## 📋 Checklist Setelah Deploy

- [ ] Build berhasil (status "Ready")
- [ ] Website bisa diakses
- [ ] Semua halaman bisa dibuka
- [ ] Language switcher bekerja
- [ ] Form contact bisa di-submit (jika email sudah di-setup)
- [ ] WhatsApp button bekerja
- [ ] Logo/favicon muncul di tab browser
- [ ] Responsive design bekerja (test di mobile)

---

## 🔄 Update Website (Setelah Perubahan)

Setiap kali Anda push perubahan ke GitHub:

1. **Push ke GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Vercel Auto-Deploy:**
   - Vercel akan otomatis detect perubahan
   - Build akan otomatis dimulai
   - Tunggu 2-5 menit
   - Website akan otomatis update

3. **Tidak Perlu Klik Apa-apa!**
   - Semua otomatis setelah push ke GitHub

---

## 🎯 Tips

1. **Monitor Deployments:**
   - Selalu cek deployment status setelah push
   - Jika error, cek build logs untuk detail

2. **Environment Variables:**
   - Jangan lupa setup environment variables untuk email
   - Tanpa ini, form contact tidak akan mengirim email

3. **Custom Domain (Optional):**
   - Di Settings → Domains
   - Tambahkan custom domain jika punya
   - Vercel akan setup SSL otomatis

4. **Preview Deployments:**
   - Setiap pull request akan membuat preview deployment
   - Berguna untuk test sebelum merge ke main

---

## 🆘 Butuh Bantuan?

Jika masih ada masalah:
1. Cek build logs di Vercel
2. Share error message lengkap
3. Pastikan semua file sudah ter-push ke GitHub

---

## 📝 Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard

**Deployment URL:** Akan muncul di dashboard setelah build berhasil

**Environment Variables:** Settings → Environment Variables

**Build Logs:** Klik pada deployment → Scroll ke bawah

