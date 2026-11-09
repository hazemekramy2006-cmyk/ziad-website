/* =========================================================
   Ziad Shaaban — Portfolio scripts
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- TRANSLATIONS ---------------- */
  const I18N = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.work': 'Work',
      'nav.skills': 'Skills',
      'nav.resume': 'Resume',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Photographer &amp; Producer',
      'hero.title1': 'Ziad',
      'hero.title2': 'Shaaban',
      'hero.sub': 'Two years of hands-on experience turning ideas into photos and videos that people stop to watch.',
      'hero.desc': 'Photography, video production and editing — from the first idea to the final export. I work with brands, creators and businesses to deliver content that looks clean, tells a story and gets results.',
      'hero.cta1': 'Hire Me',
      'hero.cta2': 'View My Work',
      'hero.meta': 'Available for freelance &amp; brand work',
      'hero.imgAlt': 'Ziad Shaaban holding a laptop',

      'ui.scroll': 'Scroll',
      'ui.scrollAria': 'Scroll down',
      'ui.call': 'Call',
      'ui.whatsapp': 'WhatsApp',
      'ui.toLight': 'Switch to light mode',
      'ui.toDark': 'Switch to dark mode',

      'marquee': 'PHOTOGRAPHY — VIDEO PRODUCTION — PREMIERE PRO — CAPCUT — COLOR GRADING — CONTENT CREATION — ',

      'about.label': 'About Me',
      'about.title': 'Passionate about every single frame.',
      'about.imgAlt': 'Portrait of Ziad Shaaban',
      'about.badge': 'Years Experience',
      'about.p1': "I'm Ziad Shaaban, a photographer and producer with two years of experience in shooting, production and video editing. I work with brands, creators and businesses to deliver content that looks clean, tells a story and gets real results.",
      'about.p2': "I believe great content is a mix of the right light, the right timing and a sharp edit — that's exactly what I bring to every project I work on.",
      'about.s1': 'Years Experience',
      'about.s2': 'Projects Delivered',
      'about.s3': 'Brands &amp; Clients',

      'services.label': 'What I Do',
      'services.title': 'Services built around your content.',
      'services.intro': 'Four things I do best — start to finish, no hand-offs, no stress.',
      'services.s1t': 'Photography',
      'services.s1d': 'Clean, sharp photography for products, portraits and events — with proper lighting and professional retouching.',
      'services.s2t': 'Video Production',
      'services.s2d': 'Full production: concept, shooting, direction and delivery for ads and brand films.',
      'services.s3t': 'Video Editing',
      'services.s3d': 'Precise editing in Adobe Premiere Pro — pacing, sound design and color grading that keep viewers watching.',
      'services.s4t': 'Short-Form Content',
      'services.s4d': 'Reels, TikTok and Shorts edited in CapCut, built to reach more people and drive engagement.',

      'work.label': 'Selected Work',
      'work.title': "A few things I've worked on.",
      'work.intro': 'A mix of brand films, product shoots and short-form content — the names stay private, the work speaks.',
      'work.video': 'Video',
      'work.videos': 'videos',

      'skills.label': 'Tools &amp; Skills',
      'skills.title': 'The gear behind the work.',
      'skills.k1': 'Photography',
      'skills.k2': 'Adobe Premiere Pro',
      'skills.k3': 'CapCut Editing',
      'skills.k4': 'Color Grading',
      'skills.k5': 'Lighting &amp; Setup',
      'skills.k6': 'Creative Direction',
      'skills.toolsLabel': 'Software &amp; Gear',
      'skills.t5': 'DSLR &amp; Mirrorless Cameras',
      'skills.t6': 'LED &amp; Studio Lighting',

      'resume.label': 'Resume',
      'resume.title': 'My journey so far.',
      'resume.intro': 'Two years of hands-on work behind the camera and inside the timeline.',
      'resume.expTitle': 'Experience',
      'resume.eduTitle': 'Education &amp; Certificates',
      'resume.print': 'Print / Save CV',
      'resume.e1p': '2024 — Present',
      'resume.e1r': 'Freelance Photographer &amp; Producer',
      'resume.e1o': 'Self-employed',
      'resume.e1d': 'Producing photo and video content for brands, studios and creators — handling everything from concept and shooting to editing and final delivery.',
      'resume.e2p': '2023 — 2024',
      'resume.e2r': 'Video Editor',
      'resume.e2o': 'Freelance · Remote',
      'resume.e2d': 'Edited commercials, promos and short-form content in Premiere Pro and CapCut for a range of clients, with a focus on clean pacing and fast turnaround.',
      'resume.e3p': '2023',
      'resume.e3r': 'Photography Assistant',
      'resume.e3o': 'Studio &amp; Events',
      'resume.e3d': 'Supported studio and on-location shoots — lighting setup, camera assistance, photo selection and basic editing.',
      'resume.c1p': '2024',
      'resume.c1r': 'Video Editing &amp; Post-Production',
      'resume.c1o': 'Professional Certificate',
      'resume.c1d': 'Advanced editing, sound design and color grading workflow in Adobe Premiere Pro.',
      'resume.c2p': '2023',
      'resume.c2r': 'Digital Photography Fundamentals',
      'resume.c2o': 'Professional Certificate',
      'resume.c2d': 'Exposure, composition, lighting and retouching fundamentals.',
      'resume.c3p': '2023',
      'resume.c3r': 'Social Media Content Creation',
      'resume.c3o': 'Professional Certificate',
      'resume.c3d': 'Planning and producing short-form content that performs on Reels, TikTok and Shorts.',

      'contact.label': 'Contact',
      'contact.title': "Let's create something together.",
      'contact.intro': 'Available for freelance projects, brand shoots and video production. Call me or send a WhatsApp message anytime.',
      'contact.card1': 'Mobile',
      'contact.card2': 'Mobile',
      'contact.location': 'Egypt · Available for work worldwide',

      'footer.rights': '© 2026 Ziad Shaaban. All rights reserved.',
      'footer.top': 'Back to top ↑'
    },

    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'من أنا',
      'nav.services': 'الخدمات',
      'nav.work': 'أعمالي',
      'nav.skills': 'المهارات',
      'nav.resume': 'السيرة الذاتية',
      'nav.contact': 'تواصل معي',

      'hero.eyebrow': 'مصور فوتوغرافي ومُنتج فيديو',
      'hero.title1': 'زياد',
      'hero.title2': 'شعبان',
      'hero.sub': 'خبرة سنتين في تحويل الأفكار إلى صور وفيديوهات تشدّ انتباه المشاهد وتجبره على التوقف.',
      'hero.desc': 'تصوير، إنتاج ومونتاج فيديو — من أول فكرة لحد التسليم النهائي. بشتغل مع البراندات والصنّاع وأصحاب المشروعات عشان أسلّم محتوى نظيف، يحكي قصة، ويجيب نتائج.',
      'hero.cta1': 'اشتغل معايا',
      'hero.cta2': 'شوف أعمالي',
      'hero.meta': 'متاح للفريلانس ومشاريع البراندات',
      'hero.imgAlt': 'زياد شعبان وهو حامل لابتوب',

      'ui.scroll': 'انزل',
      'ui.scrollAria': 'انزل للأسفل',
      'ui.call': 'اتصل',
      'ui.whatsapp': 'واتساب',
      'ui.toLight': 'التبديل للمظهر الفاتح',
      'ui.toDark': 'التبديل للمظهر الداكن',

      'marquee': 'تصوير فوتوغرافي — إنتاج فيديو — بريمير برو — كاب كات — تصحيح الألوان — صناعة محتوى — ',

      'about.label': 'من أنا',
      'about.title': 'شغوف بكل لقطة.',
      'about.imgAlt': 'صورة زياد شعبان',
      'about.badge': 'سنوات خبرة',
      'about.p1': 'أنا زياد شعبان، مصور ومُنتج بخبرة سنتين في التصوير والإنتاج ومونتاج الفيديو. بشتغل مع البراندات والصنّاع وأصحاب المشروعات عشان أسلّم محتوى نظيف، يحكي قصة، ويعطي نتائج حقيقية.',
      'about.p2': 'أؤمن إن المحتوى المميز مزيج من الإضاءة الصح، والتوقيت الصح، والمونتاج المضبوط — وده بالضبط اللي بقدّمه في كل مشروع بشتغل عليه.',
      'about.s1': 'سنوات خبرة',
      'about.s2': 'مشاريع منفذة',
      'about.s3': 'براندات وعملاء',

      'services.label': 'الخدمات',
      'services.title': 'خدمات مبنية حوالين محتواك.',
      'services.intro': 'أربع خدمات أنا أحسن فيها — من البداية للنهاية، من غير وجع دماغ.',
      'services.s1t': 'تصوير فوتوغرافي',
      'services.s1d': 'تصوير نظيف وحاد للمنتجات والبورتريه والفعاليات — بإضاءة مضبوطة وريتاتش احترافي.',
      'services.s2t': 'إنتاج الفيديو',
      'services.s2d': 'إنتاج كامل: فكرة، تصوير، إخراج وتسليم للإعلانات وأفلام البراند.',
      'services.s3t': 'مونتاج الفيديو',
      'services.s3d': 'مونتاج دقيق على Adobe Premiere Pro — إيقاع وصوت وتصحيح ألوان يخلّي المشاهد يكمّل لآخره.',
      'services.s4t': 'محتوى الشورت فورم',
      'services.s4d': 'ريلز وتيك توك وشورتس مونتاجها على كاب كات، مصممة عشان توصل لأكبر عدد ممكن وترفع التفاعل.',

      'work.label': 'أعمال مختارة',
      'work.title': 'شغلات قليلة اشتغلت عليها.',
      'work.intro': 'مزيج من أفلام البراندات وتصوير المنتجات والمحتوى الشورت فورم — الأسماء بتفضل خاصة، والشغل هو اللي بيتكلم.',
      'work.video': 'فيديو',
      'work.videos': 'فيديو',

      'skills.label': 'الأدوات والمهارات',
      'skills.title': 'الأدوات اللي وراء الشغل.',
      'skills.k1': 'تصوير فوتوغرافي',
      'skills.k2': 'أدوبي بريمير برو',
      'skills.k3': 'مونتاج كاب كات',
      'skills.k4': 'تصحيح الألوان',
      'skills.k5': 'الإضاءة والتجهيز',
      'skills.k6': 'التوجيه الإبداعي',
      'skills.toolsLabel': 'البرامج والمعدات',
      'skills.t5': 'كاميرات DSLR و Mirrorless',
      'skills.t6': 'إضاءة LED وإضاءة استوديو',

      'resume.label': 'السيرة الذاتية',
      'resume.title': 'رحلتي لحد دلوقتي.',
      'resume.intro': 'سنتين شغل عملي ورا الكاميرا وجوه برنامج المونتاج.',
      'resume.expTitle': 'الخبرة',
      'resume.eduTitle': 'التعليم والشهادات',
      'resume.print': 'اطبع / احفظ السيرة الذاتية',
      'resume.e1p': '2024 — الآن',
      'resume.e1r': 'مصور ومُنتج — فريلانس',
      'resume.e1o': 'بالحساب الشخصي',
      'resume.e1d': 'بنتج محتوى صور وفيديو للبراندات والاستوديوهات والصنّاع — بتولى كل حاجة من الفكرة والتصوير لحد المونتاج والتسليم النهائي.',
      'resume.e2p': '2023 — 2024',
      'resume.e2r': 'مونتير فيديو',
      'resume.e2o': 'فريلانس · عن بُعد',
      'resume.e2d': 'مونتاج إعلانات وبرومو ومحتوى شورت فورم على بريمير برو وكاب كات لمجموعة من العملاء، بتركيز على الإيقاع النظيف والتسليم السريع.',
      'resume.e3p': '2023',
      'resume.e3r': 'مساعد تصوير',
      'resume.e3o': 'استوديو وفعاليات',
      'resume.e3d': 'مساندة جلسات التصوير في الاستوديو وفي المواقع — تجهيز الإضاءة، مساعدة المصور، وانتقاء الصور وتعديلها.',
      'resume.c1p': '2024',
      'resume.c1r': 'مونتاج الفيديو وما بعد الإنتاج',
      'resume.c1o': 'شهادة مهنية',
      'resume.c1d': 'سير عمل متقدم في المونتاج وتصميم الصوت وتصحيح الألوان على Adobe Premiere Pro.',
      'resume.c2p': '2023',
      'resume.c2r': 'أساسيات التصوير الرقمي',
      'resume.c2o': 'شهادة مهنية',
      'resume.c2d': 'أساسيات التعريض والتكوين والإضاءة والريتاتش.',
      'resume.c3p': '2023',
      'resume.c3r': 'صناعة محتوى السوشيال ميديا',
      'resume.c3o': 'شهادة مهنية',
      'resume.c3d': 'التخطيط وإنتاج المحتوى الشورت فورم اللي بياخد أداء كويس على الريلز والتيك توك والشورتس.',

      'contact.label': 'تواصل معي',
      'contact.title': 'يلا نعمل حاجة حلوة مع بعض.',
      'contact.intro': 'متاح لمشاريع الفريلانس وتصوير البراندات وإنتاج الفيديو. اتصل بيا أو ابعتلي على الواتساب في أي وقت.',
      'contact.card1': 'موبايل',
      'contact.card2': 'موبايل',
      'contact.location': 'مصر · متاح للعمل في أي مكان',

      'footer.rights': '© 2026 زياد شعبان. كل الحقوق محفوظة.',
      'footer.top': 'أعلى الصفحة ↑'
    }
  };

  const TITLES = {
    en: 'Ziad Shaaban — Photographer & Producer',
    ar: 'زياد شعبان — مصور فوتوغرافي ومُنتج فيديو'
  };

  let lang = 'en';

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function applyLang(next) {
    lang = (next === 'ar') ? 'ar' : 'en';
    const dict = I18N[lang];
    const html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = TITLES[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('alt', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('title', dict[key]);
      }
    });

    const label = document.getElementById('langLabel');
    if (label) label.textContent = (lang === 'en') ? 'العربية' : 'English';

    updateThemeBtn();
    store('ziad-lang', lang);
  }

  /* ---------------- HEADER / PROGRESS ---------------- */
  const header = document.getElementById('header');
  const progress = document.getElementById('progress');

  function onScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', y > 30);

    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(y / h, 1) : 0;
      progress.style.transform = 'scaleX(' + p + ')';
    }
    updateActiveLink(y);
    if (typeof sweep === 'function') sweep();
  }

  /* ---------------- ACTIVE NAV LINK ---------------- */
  const sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
  const navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  const pdots = Array.prototype.slice.call(document.querySelectorAll('.pdot'));

  function updateActiveLink(y) {
    let current = 'home';
    sections.forEach(function (sec) {
      if (y + 140 >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === '#' + current);
    });
    pdots.forEach(function (dot) {
      const href = dot.getAttribute('href') || '';
      dot.classList.toggle('current', href === '#' + current);
    });
  }

  /* ---------------- MOBILE MENU ---------------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  function closeMenu() {
    if (!nav || !burger) return;
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.forEach(function (link) { link.addEventListener('click', closeMenu); });
  }

  /* ---------------- REVEAL ON SCROLL ---------------- */
  const revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  const skillEls = Array.prototype.slice.call(document.querySelectorAll('.skill'));
  let pending = revealEls.concat(skillEls.filter(function (el) { return el.classList.contains('reveal') === false; }));

  function fillSkill(el) {
    const bar = el.querySelector('.skill-bar i');
    if (!bar) return;
    const level = parseInt(bar.getAttribute('data-level'), 10) || 0;
    bar.style.setProperty('--w', level + '%');
  }
  skillEls.forEach(fillSkill);

  function show(el) {
    if (el.classList.contains('in')) return;
    el.classList.add('in');
    el.querySelectorAll('.num[data-count]').forEach(function (n) {
      if (n.getAttribute('data-done')) return;
      n.setAttribute('data-done', '1');
      animateCount(n);
    });
    if (el.classList.contains('num') && el.hasAttribute('data-count') && !el.getAttribute('data-done')) {
      el.setAttribute('data-done', '1');
      animateCount(el);
    }
  }

  function sweep() {
    if (!pending.length) return;
    const limit = window.innerHeight * 0.92;
    for (let i = pending.length - 1; i >= 0; i--) {
      const rect = pending[i].getBoundingClientRect();
      if (rect.top < limit) {
        show(pending[i]);
        pending.splice(i, 1);
      }
    }
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

    pending.forEach(function (el) { io.observe(el); });
  }

  let ticking = false;
  function queueSweep() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { sweep(); ticking = false; });
  }
  window.addEventListener('resize', queueSweep);

  /* ---------------- COUNTERS ---------------- */
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1500;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- PAGE TRANSITIONS (snap sections) ---------------- */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pages = Array.prototype.slice.call(document.querySelectorAll('.hero, .section'));

  function inActiveZone(el) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    return r.top < vh * 0.72 && r.bottom > vh * 0.12;
  }

  if (!reduced && 'IntersectionObserver' in window && pages.length) {
    pages.forEach(function (p) { if (inActiveZone(p)) p.classList.add('active'); });
    document.documentElement.classList.add('transitions');

    const pageIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle('active', e.isIntersecting);
      });
    }, { threshold: 0, rootMargin: '-12% 0px -28% 0px' });

    pages.forEach(function (p) { pageIO.observe(p); });
  }

  /* ---------------- HERO PARALLAX ---------------- */
  const heroPhoto = document.getElementById('heroPhoto');
  const hero = document.getElementById('home');

  if (heroPhoto && hero && !reduced && window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('mousemove', function (e) {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroPhoto.style.transform = 'translate3d(' + (x * -22) + 'px,' + (y * -14) + 'px,0)';
    });
    hero.addEventListener('mouseleave', function () {
      heroPhoto.style.transform = 'translate3d(0,0,0)';
    });
  }

  /* ---------------- THEME (dark / light) ---------------- */
  const THEME_KEY = 'ziad-theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateThemeBtn() {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    const dict = I18N[lang] || I18N.en;
    const key = (getTheme() === 'light') ? 'ui.toDark' : 'ui.toLight';
    const label = dict[key] || '';
    btn.setAttribute('title', label);
    btn.setAttribute('aria-label', label);
  }

  function setTheme(theme, persist) {
    const next = (theme === 'light') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    if (persist !== false) store(THEME_KEY, next);
    updateThemeBtn();
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(getTheme() === 'light' ? 'dark' : 'light');
    });
  }

  /* ---------------- LANGUAGE BUTTON ---------------- */
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(lang === 'en' ? 'ar' : 'en');
      // keep any elements already on screen visible after text swap
      document.querySelectorAll('.reveal.in').forEach(function (el) {
        el.classList.add('in');
      });
    });
  }

  /* ---------------- VIDEO GALLERY ---------------- */
  const videos = Array.prototype.slice.call(document.querySelectorAll('.work-video video'));

  videos.forEach(function (v) {
    v.addEventListener('play', function () {
      videos.forEach(function (other) {
        if (other !== v && !other.paused && !other.ended) other.pause();
      });
      const box = v.closest('.work-visual');
      if (box) box.classList.add('playing');
    });

    function idle() {
      const box = v.closest('.work-visual');
      if (box) box.classList.remove('playing');
    }
    v.addEventListener('pause', idle);
    v.addEventListener('ended', idle);
    v.addEventListener('error', function () {
      const card = v.closest('.work-video');
      if (card) card.classList.add('video-error');
      idle();
    });
  });

  /* ---------------- PRINT CV ---------------- */
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ---------------- INIT ---------------- */
  const saved = read('ziad-lang');
  applyLang(saved === 'ar' ? 'ar' : 'en');
  setTheme(read(THEME_KEY) || 'dark', false);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    onScroll();
    if (window.innerWidth > 900) closeMenu();
  });
  onScroll();
})();
