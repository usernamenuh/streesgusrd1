import { Link } from "react-router-dom";
import { Footer } from "../components/landing/Footer";

export const infoPages = {
  "/about": {
    eyebrow: "Company",
    title: "About StressGuard",
    lead: "StressGuard adalah aplikasi pendamping kesehatan preventif yang membantu pengguna memahami hubungan pola tidur, screen time, dan tingkat stres.",
    sections: [
      {
        title: "Tujuan",
        body: "Aplikasi ini dibuat untuk membantu pengguna melakukan check-in harian dan mendapatkan gambaran awal tentang tingkat stres berdasarkan data kebiasaan tidur.",
      },
      {
        title: "Cara Kerja",
        body: "Data pengguna diproses oleh backend, dikirim ke AI service untuk prediksi, lalu hasilnya disimpan agar pengguna dapat melihat riwayat dan tren dari waktu ke waktu.",
      },
      {
        title: "Batasan",
        body: "StressGuard bukan alat diagnosis medis. Hasil prediksi digunakan sebagai informasi pendukung dan tidak menggantikan konsultasi dengan tenaga profesional.",
      },
    ],
  },
  "/blog": {
    eyebrow: "Company",
    title: "Blog",
    lead: "Catatan singkat seputar tidur, screen time, kesehatan preventif, dan pengembangan StressGuard.",
    sections: [
      {
        title: "Sleep Pattern Awareness",
        body: "Kualitas tidur, durasi tidur, dan kebiasaan menggunakan perangkat sebelum tidur dapat memberi sinyal awal tentang kondisi stres harian.",
      },
      {
        title: "AI Untuk Edukasi Kesehatan",
        body: "StressGuard memakai machine learning untuk membaca pola data dan generative AI untuk menyusun rekomendasi yang lebih mudah dipahami.",
      },
      {
        title: "Pengembangan Selanjutnya",
        body: "Fitur yang dapat dikembangkan meliputi analisis mingguan, rekomendasi yang lebih personal, dan ekspor laporan kesehatan preventif.",
      },
    ],
  },
  "/careers": {
    eyebrow: "Company",
    title: "Careers",
    lead: "StressGuard saat ini adalah project capstone, belum membuka rekrutmen resmi.",
    sections: [
      {
        title: "Kolaborasi",
        body: "Kontributor dapat membantu pada area frontend, backend, AI service, dokumentasi, testing, dan deployment.",
      },
      {
        title: "Fokus Pengembangan",
        body: "Prioritas pengembangan adalah stabilitas API, pengalaman pengguna, keamanan data, dan validasi model prediksi.",
      },
      {
        title: "Kontak",
        body: "Untuk diskusi kolaborasi, gunakan halaman Contact atau Support.",
      },
    ],
  },
  "/contact": {
    eyebrow: "Company",
    title: "Contact",
    lead: "Gunakan kontak ini untuk pertanyaan project, laporan bug, atau masukan fitur.",
    sections: [
      {
        title: "Email",
        body: "support@stressguard.local",
      },
      {
        title: "Topik Bantuan",
        body: "Sertakan deskripsi masalah, langkah yang sudah dicoba, screenshot jika ada, dan bagian aplikasi yang bermasalah.",
      },
      {
        title: "Catatan",
        body: "Alamat email ini adalah placeholder lokal untuk dokumentasi project.",
      },
    ],
  },
  "/privacy": {
    eyebrow: "Legal",
    title: "Privacy",
    lead: "Halaman ini menjelaskan ringkasan penggunaan data dalam StressGuard.",
    sections: [
      {
        title: "Data Yang Diproses",
        body: "StressGuard memproses data seperti usia, gender, durasi tidur, kualitas tidur, screen time, penggunaan HP sebelum tidur, catatan opsional, dan hasil prediksi.",
      },
      {
        title: "Tujuan Pemrosesan",
        body: "Data digunakan untuk membuat prediksi tingkat stres, menyimpan riwayat, menampilkan dashboard, dan memberikan rekomendasi preventif.",
      },
      {
        title: "Keamanan",
        body: "Data sensitif seperti API key dan credential harus disimpan sebagai environment variable dan tidak boleh di-commit ke repository.",
      },
    ],
  },
  "/terms": {
    eyebrow: "Legal",
    title: "Terms",
    lead: "Dengan menggunakan StressGuard, pengguna memahami bahwa hasil aplikasi bersifat informatif dan preventif.",
    sections: [
      {
        title: "Penggunaan",
        body: "Gunakan StressGuard untuk mencatat kebiasaan tidur dan membaca insight awal tentang tingkat stres.",
      },
      {
        title: "Bukan Diagnosis",
        body: "StressGuard tidak memberikan diagnosis medis, resep, atau keputusan klinis. Hubungi profesional kesehatan untuk kondisi serius.",
      },
      {
        title: "Ketersediaan",
        body: "Aplikasi dapat berubah selama proses pengembangan, termasuk endpoint, tampilan, fitur, dan mekanisme penyimpanan data.",
      },
    ],
  },
  "/cookies": {
    eyebrow: "Legal",
    title: "Cookies",
    lead: "StressGuard dapat memakai penyimpanan browser untuk menjaga pengalaman pengguna.",
    sections: [
      {
        title: "Local Storage",
        body: "Token autentikasi disimpan di browser agar pengguna tetap login selama sesi penggunaan aplikasi.",
      },
      {
        title: "Firebase",
        body: "Autentikasi Google dapat menggunakan mekanisme penyimpanan dari Firebase untuk mengelola sesi login.",
      },
      {
        title: "Kontrol Pengguna",
        body: "Pengguna dapat logout atau membersihkan data browser untuk menghapus sesi lokal.",
      },
    ],
  },
  "/licenses": {
    eyebrow: "Legal",
    title: "Licenses",
    lead: "StressGuard dibangun menggunakan library open-source untuk frontend, backend, dan AI service.",
    sections: [
      {
        title: "Frontend",
        body: "Frontend menggunakan React, Vite, lucide-react, Firebase client, Axios, dan beberapa utility UI.",
      },
      {
        title: "Backend",
        body: "Backend menggunakan Node.js, Express, SQLite, Firebase Admin, JWT, bcrypt, dan validator schema.",
      },
      {
        title: "AI Service",
        body: "AI service menggunakan FastAPI, TensorFlow, scikit-learn, pandas, joblib, OpenAI client, dan Uvicorn.",
      },
    ],
  },
  "/documentation": {
    eyebrow: "Resources",
    title: "Documentation",
    lead: "Dokumentasi ini merangkum struktur StressGuard dan cara menjalankan setiap service.",
    sections: [
      {
        title: "Frontend",
        body: "Folder frontend berisi aplikasi React untuk landing page, login, dashboard, form asesmen, hasil prediksi, dan riwayat.",
      },
      {
        title: "Backend",
        body: "Folder backend berisi REST API Express untuk autentikasi, metadata form, prediksi, dashboard, dan riwayat.",
      },
      {
        title: "AI Engineer",
        body: "Folder ai_engineer berisi FastAPI service untuk prediksi model machine learning dan rekomendasi berbasis AI.",
      },
    ],
  },
  "/api-ref": {
    eyebrow: "Resources",
    title: "API Ref",
    lead: "Referensi endpoint utama yang digunakan StressGuard.",
    sections: [
      {
        title: "Backend API",
        body: "Base URL lokal backend adalah http://localhost:5000/api/v1. Endpoint utama meliputi /health, /auth/google, /meta/form, /predictions, dan /dashboard/summary.",
      },
      {
        title: "AI API",
        body: "Base URL lokal AI service adalah http://localhost:8000. Endpoint prediksi utama adalah POST /predict.",
      },
      {
        title: "Docker Network",
        body: "Jika backend dan AI berjalan sebagai container, gunakan AI_API_URL=http://ai-engineer:8000/predict agar backend dapat memanggil AI service.",
      },
    ],
  },
  "/community": {
    eyebrow: "Resources",
    title: "Community",
    lead: "Ruang komunitas digunakan untuk diskusi, masukan, dan pengembangan StressGuard.",
    sections: [
      {
        title: "Diskusi",
        body: "Topik diskusi dapat mencakup ide fitur, desain dashboard, akurasi model, dokumentasi, dan deployment.",
      },
      {
        title: "Kontribusi",
        body: "Kontribusi yang bermanfaat meliputi bug report, perbaikan copywriting, test case, dan peningkatan dokumentasi.",
      },
      {
        title: "Etika",
        body: "Diskusi harus menjaga privasi data pengguna dan tidak membagikan credential, API key, atau data kesehatan pribadi.",
      },
    ],
  },
  "/support": {
    eyebrow: "Resources",
    title: "Support",
    lead: "Gunakan halaman ini sebagai panduan awal saat aplikasi mengalami masalah.",
    sections: [
      {
        title: "Backend Tidak Terhubung",
        body: "Pastikan backend berjalan di port 5000 dan frontend mengarah ke base URL backend yang benar.",
      },
      {
        title: "AI Internal Error",
        body: "Pastikan AI service berjalan di port 8000. Jika memakai Docker, backend harus memakai AI_API_URL dengan nama container, bukan localhost.",
      },
      {
        title: "Firebase Error",
        body: "Periksa FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, dan FIREBASE_PRIVATE_KEY di file .env backend.",
      },
    ],
  },
};

export function InfoPage({ page }) {
  return (
    <>
      <section className="info-page" aria-labelledby="info-title">
        <div className="info-page-header">
          <span>{page.eyebrow}</span>
          <h1 id="info-title">{page.title}</h1>
          <p>{page.lead}</p>
        </div>

        <div className="info-page-grid">
          {page.sections.map((section) => (
            <article className="info-panel" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="info-page-actions">
          <Link to="/" className="info-link-primary">
            Back to Home
          </Link>
          <Link to="/dashboard" className="info-link-secondary">
            Open Dashboard
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
