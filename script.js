/* ============================================================
   Muhammad Umer — Portfolio Script
   script.js
   ============================================================ */

/* ── PROJECTS DATA ── */
const PROJECTS = [
  {
    title: "Laptop Price Predictor",
    tag: "Machine Learning",
    desc: "Regression pipeline (Scikit-learn) on 1,300+ records with automated data cleaning in Pandas, deployed via Streamlit for real-time predictions.",
    emoji: "💻",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Laptop%20price%20predictor",
    stack: "Python · Scikit-learn · Streamlit"
  },
  {
    title: "Bangalore House Price Prediction",
    tag: "Machine Learning",
    desc: "Regression model with outlier removal, feature selection, and cross-validation for accurate real estate price estimation.",
    emoji: "🏠",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Bangloru%20House%20Price%20Prediction",
    stack: "Python · Pandas · Scikit-learn"
  },
  {
    title: "Car Price Prediction",
    tag: "Machine Learning",
    desc: "End-to-end regression pipeline for vehicle price estimation with full EDA, feature engineering, and model evaluation.",
    emoji: "🚗",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Car%20Price%20Prediction",
    stack: "Python · Pandas · Scikit-learn"
  },
  {
    title: "Email Spam Classifier",
    tag: "NLP",
    desc: "TF-IDF vectorization + Naive Bayes classification pipeline for spam detection. High accuracy, packaged as a reusable Python script.",
    emoji: "📧",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/E-mail%20Spam%20Classifier",
    stack: "Python · NLP · Scikit-learn"
  },
  {
    title: "COVID-19 Dashboard",
    tag: "Data Visualization",
    desc: "Interactive COVID dashboard with time-series analysis, country-level comparisons, and trend visualizations using Pandas & Matplotlib.",
    emoji: "📊",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Making%20Corona%20Virus%20Dashboard",
    stack: "Python · Pandas · Matplotlib"
  },
  {
    title: "Olympic Data Analytics",
    tag: "Data Analysis",
    desc: "120 years of Olympic data analyzed to surface country and sport performance trends using Pandas groupby operations.",
    emoji: "🏅",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Olympic%20Data%20Analytics",
    stack: "Python · Pandas · Seaborn"
  },
  {
    title: "Posture Detection (PoseNet)",
    tag: "Computer Vision",
    desc: "Real-time human posture detection using PoseNet model for body keypoint identification, analysis, and posture alerts.",
    emoji: "🧘",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Posture%20detection%20using%20PoseNet",
    stack: "Python · PoseNet · OpenCV"
  },
  {
    title: "File Management System",
    tag: "Python",
    desc: "Python-based file management system with automated file handling, organization, categorization, and processing operations.",
    emoji: "📁",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/File%20Handling%20System",
    stack: "Python · File I/O"
  },
  {
    title: "Titanic Survival Prediction",
    tag: "Classification",
    desc: "Logistic Regression and Random Forest classifiers with structured EDA to identify key survival factors. Precision, recall & F1 evaluated.",
    emoji: "🚢",
    github: "https://github.com/Umer-ML/Machine_Learning_Projects/tree/main/Session%20on%20titanic%20survival",
    stack: "Python · Scikit-learn · Seaborn"
  }
];

/* ── BUILD PROJECT CARDS ── */
function buildProjects() {
  const grid = document.getElementById('projGrid');
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card fade-up';
    card.style.transitionDelay = (i % 3 * 0.08) + 's';

    card.innerHTML = `
      <div class="proj-img-wrap" id="imgWrap${i}">
        <img id="projImg${i}" src="" alt="${p.title}">
        <div class="proj-placeholder" id="projPH${i}">
          <div class="proj-emoji">${p.emoji}</div>
          <div class="proj-ph-text">Click image to view on GitHub</div>
        </div>
        <div class="proj-hover-overlay" onclick="window.open('${p.github}','_blank')">
          <i class="fab fa-github"></i>
          <span>View on GitHub →</span>
        </div>
        <button class="proj-upload-btn" title="Upload project screenshot"
          onclick="event.stopPropagation(); document.getElementById('projFile${i}').click()">
          <i class="fas fa-image"></i> Add Image
        </button>
        <input type="file" id="projFile${i}" accept="image/*" hidden>
      </div>
      <div class="proj-body">
        <span class="proj-tag">${p.tag}</span>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-footer">
          <span class="proj-stack"><i class="fab fa-python" style="color:var(--accent);margin-right:4px"></i>${p.stack}</span>
          <a class="proj-github" href="${p.github}" target="_blank">
            <i class="fab fa-github"></i> GitHub <i class="fas fa-arrow-right" style="font-size:10px"></i>
          </a>
        </div>
      </div>`;

    grid.appendChild(card);

    /* Per-project image upload */
    document.getElementById(`projFile${i}`).addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const img = document.getElementById(`projImg${i}`);
        img.src = ev.target.result;
        img.style.display = 'block';
        document.getElementById(`projPH${i}`).style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
  });
}

/* ── GRADIENT WAVE ANIMATION ── */
function initWave() {
  const canvas = document.getElementById('waveCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function getColors() {
    const dark = document.body.classList.contains('dark');
    return dark
      ? [
          'rgba(37,99,235,0.18)',
          'rgba(59,130,246,0.12)',
          'rgba(99,102,241,0.10)',
          'rgba(37,99,235,0.07)'
        ]
      : [
          'rgba(37,99,235,0.09)',
          'rgba(99,102,241,0.07)',
          'rgba(59,130,246,0.06)',
          'rgba(219,234,254,0.5)'
        ];
  }

  function drawWave(amplitude, period, phase, color, yOffset) {
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let x = 0; x <= W; x += 3) {
      const y = yOffset
        + Math.sin((x / W) * period * Math.PI * 2 + phase)  * amplitude
        + Math.sin((x / W) * period * 0.5 * Math.PI * 2 + phase * 1.3) * (amplitude * 0.4);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.008;
    const colors = getColors();
    const base = H * 0.72;

    drawWave(55, 2.1, t * 0.9,         colors[0], base);
    drawWave(45, 2.5, t * 1.1 + 1.0,   colors[1], base + 20);
    drawWave(35, 3.0, t * 0.7 + 2.0,   colors[2], base + 40);
    drawWave(25, 1.8, t * 1.3 + 0.5,   colors[3], base + 60);

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ── DARK / LIGHT THEME ── */
function initTheme() {
  const btn = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  const saved = localStorage.getItem('mu-theme');
  if (saved === 'dark') applyDark();

  btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      icon.className = 'fas fa-moon';
      label.textContent = 'Dark';
      localStorage.setItem('mu-theme', 'light');
    } else {
      applyDark();
    }
  });

  function applyDark() {
    document.body.classList.add('dark');
    icon.className = 'fas fa-sun';
    label.textContent = 'Light';
    localStorage.setItem('mu-theme', 'dark');
  }
}

/* ── HAMBURGER MENU ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── NAVBAR SCROLL EFFECT ── */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });
}

/* ── PROFILE PHOTO UPLOAD ── */
function initPhotoUpload() {
  const input = document.getElementById('photoInput');
  if (!input) return;
  input.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const img = document.getElementById('profileImg');
      const fallback = document.getElementById('photoFallback');
      img.src = ev.target.result;
      img.style.display = 'block';
      if (fallback) fallback.style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
}

/* ── SKILL BARS (animate on scroll into view) ── */
function initSkillBars() {
  const section = document.getElementById('skills');
  if (!section) return;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      obs.disconnect();
    }
  }, { threshold: 0.25 });

  obs.observe(section);
}

/* ── FADE-UP SCROLL ANIMATIONS ── */
function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── CONTACT FORM ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    success.style.display = 'block';
    form.reset();
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  });
}

/* ── ACTIVE NAV LINK ON SCROLL ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active-nav'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active-nav');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  buildProjects();
  initWave();
  initTheme();
  initHamburger();
  initNavScroll();
  initPhotoUpload();
  initSkillBars();
  initFadeUp();
  initContactForm();
  initActiveNav();
});