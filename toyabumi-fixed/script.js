/* ============================================================
   TOYA BUMI BERSIH — Main Script
   ============================================================ */

(function () {
  "use strict";

  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const revealItems = document.querySelectorAll(".reveal");
  const carousel = document.querySelector("[data-carousel]");
  const langButtons = document.querySelectorAll("[data-lang-switch]");
  const pageTitleEl = document.querySelector("#page-title");
  const pageDescriptionEl = document.querySelector("#page-description");
  const currentYear = new Date().getFullYear();

  /* ---------- TRANSLATIONS ---------- */

  const translations = {
    id: {
      pageTitle: "Toya Bumi Bersih | Sistem Pengolahan Air",
      pageDescription:
        "PT Toya Bumi Bersih menyediakan solusi pengolahan air bersih untuk rumah tangga, komersial, dan industri di Indonesia.",
      "nav.about": "Tentang",
      "nav.services": "Layanan",
      "nav.products": "Produk",
      "nav.process": "Proses",
      "nav.gallery": "Galeri",
      "nav.contact": "Kontak",
      "hero.title":
        "Pengolahan air yang <span class=\"accent\">disesuaikan</span> dengan kondisi sumber air di setiap lokasi.",
      "hero.text":
        "Teknologi, kapasitas, dan konfigurasi sistem dipilih berdasarkan hasil analisis laboratorium serta kebutuhan penggunaan.",
      "hero.primaryCta": "Hubungi via WhatsApp",
      "hero.secondaryCta": "Tentang Kami",
      "intro.title":
        "Sistem pengolahan air yang dirancang sesuai kondisi sumber air dan kebutuhan pemakaian.",
      "intro.lead":
        "PT Toya Bumi Bersih memberikan solusi pengolahan air yang disesuaikan — mulai dari konsultasi, sampling air, analisis laboratorium, desain sistem kustom, instalasi, hingga validasi hasil. Air minum yang layak konsumsi, bukan hanya klaim.",
      "services.card1Title": "Konsultasi & Sampling",
      "services.card1Text":
        "Survei lokasi dan pengambilan sampel air untuk memahami kondisi sumber air sebelum desain sistem dimulai.",
      "services.card2Title": "Analisis Laboratorium",
      "services.card2Text":
        "Pengujian parameter air untuk mengetahui kontaminan dan menentukan metode treatment yang tepat.",
      "services.card3Title": "Desain Sistem Kustom",
      "services.card3Text":
        "Perancangan sistem berdasarkan kualitas air baku, target hasil, kapasitas, dan anggaran klien.",
      "services.card5Title": "Instalasi & Implementasi",
      "services.card5Text":
        "Pemasangan sistem oleh tim berpengalaman dengan standar kerja yang terstruktur.",
      "services.card6Title": "Validasi & Monitoring",
      "services.card6Text":
        "Pengujian ulang air hasil treatment untuk memastikan kualitas dan kinerja sistem sesuai standar.",
      "products.eyebrow": "Produk Kami",
      "products.title":
        "Dua lini produk untuk kebutuhan air minum dan operasional bisnis.",
      "products.lead":
        "Dari air minum kemasan hingga sistem penyaringan air untuk operasional F&B, kami menghadirkan solusi produk yang bisa diandalkan.",
      "products.twater.badge": "Launching 2026",
      "products.twater.tagline": "Air minum kemasan dalam botol premium.",
      "products.twater.desc":
        "TWater adalah produk air minum kemasan berbentuk botol yang kami hadirkan untuk pasar Indonesia. Produk ini dijadwalkan resmi launching pada tahun 2026.",
      "products.twater.partnerLabel": "Vendor Resmi",
      "products.twater.partnerText":
        "TWater hadir melalui kerjasama strategis sebagai vendor <strong>Bluebird Group</strong>, menyediakan pasokan air minum berkualitas untuk jaringan operasional mereka.",
      "products.filter.badge": "Tersedia Sekarang",
      "products.filter.tagline":
        "Sistem penyaringan air untuk operasional komersial.",
      "products.filter.desc":
        "Sistem filter treatment air yang dirancang khusus untuk kebutuhan F&B dan komersial, menjaga standar kualitas air yang konsisten untuk operasional harian.",
      "products.filter.clientsLabel": "Dipercaya Oleh",
      "about.eyebrow": "Tentang Kami",
      "about.title":
        "Lebih dari 10 tahun menghadirkan solusi air bersih yang disesuaikan.",
      "about.story1":
        "PT Toya Bumi Bersih didirikan dengan visi menjadi nama paling terpercaya dalam purifikasi air, menghadirkan kehidupan yang lebih sehat melalui hidrasi bersih. Dengan pengalaman lebih dari 10 tahun, kami tidak menggunakan sistem seragam — melainkan menyesuaikan desain treatment dengan kondisi air nyata di setiap lokasi, menggunakan teknologi berkualitas dari Italia.",
      "about.story2":
        "Toya Bumi Bersih melayani rumah tangga, F&B, fasilitas kesehatan, dan industri. Air hasil treatment diuji di laboratorium resmi yang diakui pemerintah — kelayakan air minum adalah validasi yang dapat dipertanggungjawabkan, bukan sekadar klaim. Mitra kami termasuk Mie Gacoan, Haus!, Phobaba, dan Bluebird Group.",
      "process.eyebrow": "Cara Kerja",
      "process.title":
        "Proses kerja terstruktur agar hasil treatment lebih tepat dan terukur.",
      "process.step1Title": "Survei",
      "process.step1Text":
        "Kunjungan awal untuk mengetahui sumber air dan kebutuhan.",
      "process.step2Title": "Sampling",
      "process.step2Text":
        "Pengambilan sampel air di lapangan untuk analisis laboratorium.",
      "process.step3Title": "Analisis",
      "process.step3Text":
        "Uji laboratorium untuk menentukan solusi treatment terbaik.",
      "process.step4Title": "Instalasi",
      "process.step4Text":
        "Pemasangan sistem pengolahan air sesuai desain yang disepakati.",
      "process.step5Title": "Validasi",
      "process.step5Text":
        "Pengujian ulang air hasil treatment untuk memastikan standar terpenuhi.",
      "projects.eyebrow": "Galeri Proyek",
      "footer.about":
        "Solusi pengolahan air bersih untuk rumah tangga, komersial, dan industri dengan pendekatan yang disesuaikan pada kondisi air di lapangan.",
      "footer.companyTitle": "Perusahaan",
      "footer.company1": "Tentang Kami",
      "footer.company2": "Layanan",
      "footer.products": "Produk Kami",
      "footer.company3": "Proses Kerja",
      "footer.company4": "Galeri Proyek",
      "footer.serviceTitle": "Layanan",
      "footer.service1": "Konsultasi Air",
      "footer.service2": "Analisis Laboratorium",
      "footer.service3": "Instalasi Sistem",
      "footer.service4": "Uji Kualitas Air",
      "footer.service5": "Maintenance",
      "footer.contactTitle": "Kontak",
      "footer.whatsapp": "WhatsApp",
      "footer.bottomLeft": `© ${currentYear} PT Toya Bumi Bersih. Hak Cipta Dilindungi.`
    },

    en: {
      pageTitle: "Toya Bumi Bersih | Water Treatment System",
      pageDescription:
        "PT Toya Bumi Bersih provides clean water treatment solutions for residential, commercial, and industrial needs across Indonesia.",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.products": "Products",
      "nav.process": "Process",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "hero.title":
        "Water treatment <span class=\"accent\">tailored</span> to the water source condition at every location.",
      "hero.text":
        "Technology, capacity, and system configuration are selected based on laboratory analysis and actual usage needs.",
      "hero.primaryCta": "Contact on WhatsApp",
      "hero.secondaryCta": "About Us",
      "intro.title":
        "Water treatment systems designed around source conditions and actual usage needs.",
      "intro.lead":
        "PT Toya Bumi Bersih delivers customized water treatment solutions — from consultation, water sampling, lab analysis, custom system design, installation, to output validation. Certified safe drinking water, not just a claim.",
      "services.card1Title": "Consultation & Sampling",
      "services.card1Text":
        "Site surveys and water sampling to understand source conditions before the system design starts.",
      "services.card2Title": "Laboratory Analysis",
      "services.card2Text":
        "Water testing to identify contaminants and determine the right treatment method.",
      "services.card3Title": "Custom System Design",
      "services.card3Text":
        "System engineering based on raw water quality, output target, capacity, and budget.",
      "services.card5Title": "Installation & Implementation",
      "services.card5Text":
        "System installation by experienced teams following a structured work standard.",
      "services.card6Title": "Validation & Monitoring",
      "services.card6Text":
        "Post-treatment water is retested to confirm quality and system performance meet the standard.",
      "products.eyebrow": "Our Products",
      "products.title":
        "Two product lines for drinking water and business operational needs.",
      "products.lead":
        "From bottled drinking water to water filtration systems for F&B operations, we deliver reliable product solutions.",
      "products.twater.badge": "Launching 2026",
      "products.twater.tagline": "Premium bottled drinking water.",
      "products.twater.desc":
        "TWater is our bottled drinking water product, prepared for the Indonesian market. It is scheduled for official launch in 2026.",
      "products.twater.partnerLabel": "Official Vendor",
      "products.twater.partnerText":
        "TWater is launching through a strategic partnership as an official vendor for <strong>Bluebird Group</strong>, supplying quality drinking water for their operational network.",
      "products.filter.badge": "Available Now",
      "products.filter.tagline":
        "Water filtration system for commercial operations.",
      "products.filter.desc":
        "A water filter treatment system designed specifically for F&B and commercial needs, maintaining consistent water quality standards for daily operations.",
      "products.filter.clientsLabel": "Trusted By",
      "about.eyebrow": "About Us",
      "about.title":
        "More than 10 years of delivering site-specific clean water solutions.",
      "about.story1":
        "PT Toya Bumi Bersih was founded with a vision to become the most trusted name in water purification. With over 10 years of experience, we don't use generic systems — instead, we customize treatment designs based on actual water conditions at each site, using high-quality technology sourced from Italy.",
      "about.story2":
        "Toya Bumi Bersih serves households, F&B, healthcare, and industrial clients. Treated water is tested at government-recognized laboratories — making 'safe drinking water' a certified validation, not just a claim. Our partners include Mie Gacoan, Haus!, Phobaba, and Bluebird Group.",
      "process.eyebrow": "Work Process",
      "process.title":
        "A structured workflow so treatment results stay accurate and measurable.",
      "process.step1Title": "Survey",
      "process.step1Text":
        "Initial visit to understand the water source and usage needs.",
      "process.step2Title": "Sampling",
      "process.step2Text":
        "Water samples are collected on-site for laboratory analysis.",
      "process.step3Title": "Analysis",
      "process.step3Text":
        "Lab testing to determine the best treatment solution.",
      "process.step4Title": "Installation",
      "process.step4Text":
        "Water treatment system installation based on the agreed design.",
      "process.step5Title": "Validation",
      "process.step5Text":
        "Treated water is tested again to confirm the required standard is met.",
      "projects.eyebrow": "Project Gallery",
      "footer.about":
        "Clean water treatment solutions for residential, commercial, and industrial needs with an approach tailored to actual water conditions in the field.",
      "footer.companyTitle": "Company",
      "footer.company1": "About Us",
      "footer.company2": "Services",
      "footer.products": "Our Products",
      "footer.company3": "Work Process",
      "footer.company4": "Project Gallery",
      "footer.serviceTitle": "Services",
      "footer.service1": "Water Consultation",
      "footer.service2": "Laboratory Analysis",
      "footer.service3": "System Installation",
      "footer.service4": "Water Quality Test",
      "footer.service5": "Maintenance",
      "footer.contactTitle": "Contact",
      "footer.whatsapp": "WhatsApp",
      "footer.bottomLeft": `© ${currentYear} PT Toya Bumi Bersih. All rights reserved.`
    }
  };

  /* Keys that may contain HTML (e.g. span tags) and should be injected via innerHTML */
  const HTML_KEYS = new Set(["hero.title", "products.twater.partnerText"]);

  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    if (pageTitleEl && dict.pageTitle) pageTitleEl.textContent = dict.pageTitle;
    if (pageDescriptionEl && dict.pageDescription) {
      pageDescriptionEl.setAttribute("content", dict.pageDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key];
      if (value === undefined) return;

      if (HTML_KEYS.has(key)) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.langSwitch === lang);
    });
  };

  /* ---------- HEADER SCROLL EFFECT ---------- */

  if (siteHeader) {
    const onScroll = () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- MOBILE MENU ---------- */

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      siteNav.classList.toggle("is-open", !expanded);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
      });
    });

    document.addEventListener("click", (e) => {
      if (
        siteNav.classList.contains("is-open") &&
        !siteNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- LANGUAGE SWITCHER ---------- */

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.langSwitch);
    });
  });

  /* ---------- REVEAL ON SCROLL ---------- */

  if (revealItems.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  /* ---------- HERO CAROUSEL ---------- */

  if (carousel) {
    const track = carousel.querySelector(".hero-carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
    const dots = Array.from(carousel.querySelectorAll(".hero-carousel-dot"));
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let currentIndex = 0;
    let autoplayId = null;

    const updateCarousel = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      dots.forEach((dot, i) => {
        const isActive = i === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const stopAutoplay = () => {
      if (autoplayId) {
        clearInterval(autoplayId);
        autoplayId = null;
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (slides.length < 2 || reducedMotion.matches) return;
      autoplayId = setInterval(() => updateCarousel(currentIndex + 1), 5000);
    };

    prevBtn?.addEventListener("click", () => {
      updateCarousel(currentIndex - 1);
      startAutoplay();
    });

    nextBtn?.addEventListener("click", () => {
      updateCarousel(currentIndex + 1);
      startAutoplay();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        updateCarousel(i);
        startAutoplay();
      });
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    updateCarousel(0);
    startAutoplay();
  }

  /* ---------- INIT ---------- */

  applyTranslations("id");
})();
