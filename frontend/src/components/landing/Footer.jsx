import { Link } from "react-router-dom";

const footerGroups = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "#features",
        description: "Lihat fitur utama StressGuard.",
      },
      {
        label: "FAQ",
        href: "#faq",
        description: "Baca pertanyaan umum tentang StressGuard.",
      },
      {
        label: "Assessment",
        href: "#assessment",
        description: "Mulai form analisis tingkat stres.",
      },
      {
        label: "Dashboard",
        href: "#dashboard",
        description: "Lihat ringkasan dan tren prediksi.",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about",
        description: "Kenali tujuan StressGuard sebagai AI wellness companion.",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Baca catatan pengembangan dan edukasi kesehatan preventif.",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Lihat informasi kolaborasi dan pengembangan project.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Hubungi tim StressGuard.",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy",
        href: "/privacy",
        description: "Informasi ringkas tentang penyimpanan dan penggunaan data.",
      },
      {
        label: "Terms",
        href: "/terms",
        description: "Ketentuan penggunaan StressGuard.",
      },
      {
        label: "Cookies",
        href: "/cookies",
        description: "Informasi penyimpanan browser dan sesi pengguna.",
      },
      {
        label: "Licenses",
        href: "/licenses",
        description: "Lihat dependency dan lisensi package frontend.",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Documentation",
        href: "https://github.com/Dimas01bs/streesgusrd1",
        description: "Buka dokumentasi dan source code project di GitHub.",
        external: true,
      },
      {
        label: "API Ref",
        href: "/api-ref",
        description: "Lihat referensi endpoint backend dan AI service.",
      },
      {
        label: "Community",
        href: "/community",
        description: "Baca panduan diskusi dan kontribusi.",
      },
      {
        label: "Support",
        href: "/support",
        description: "Kirim pertanyaan atau laporan masalah.",
      },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="landing-footer-inner">
        <div className="landing-footer-brand">
          <div className="landing-footer-logo-row">
            <div className="landing-footer-logo">SG</div>
            <div>
              <span>StressGuard</span>
              <small>AI wellness companion</small>
            </div>
          </div>

          <p>
            Deteksi stress level dari pola tidur Anda menggunakan teknologi AI
            terdepan. Kesehatan Anda adalah prioritas kami.
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav className="landing-footer-group" key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      title={link.description}
                      aria-label={`${link.label}: ${link.description}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      title={link.description}
                      aria-label={`${link.label}: ${link.description}`}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="landing-footer-bottom">
        <p>© {currentYear} StressGuard. All rights reserved.</p>
      </div>
    </footer>
  );
}
