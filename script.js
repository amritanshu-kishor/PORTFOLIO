/* ============================================================
   AMRITANSHU KISHOR PORTFOLIO — INTERACTIONS & ANIMATIONS
   ============================================================ */

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ─── ACTIVE NAV LINKS ───
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  allNavLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#fff' : '';
  });
}
window.addEventListener('scroll', updateActiveNav);

// ─── ROLE TEXT ROTATOR ───
const roles = [
  'AI-Focused Developer',
  'Research Contributor',
  'FullStack Specialist',
  'Machine Learning Engineer',
];
const roleText = document.getElementById('role-text');
let roleIndex = 0;

function rotateRole() {
  roleText.style.animation = 'none';
  roleText.offsetHeight; // reflow
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.textContent = roles[roleIndex];
  roleText.style.animation = 'fadeUp 0.5s ease forwards';
}
setInterval(rotateRole, 3000);

// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80 * (Array.from(entry.target.parentElement.children).indexOf(entry.target) % 6));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
reveals.forEach(el => revealObserver.observe(el));

// ─── SMOOTH CURSOR GLOW ON HERO ───
const hero = document.getElementById('hero');
const heroContent = hero.querySelector('.hero-content');

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -3;
  const rotateY = ((x - centerX) / centerX) * 3;
  heroContent.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
hero.addEventListener('mouseleave', () => {
  heroContent.style.transform = '';
});

// ─── PROJECT CARDS — TILT ───
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ─── SKILL TAGS — STAGGER ───
document.querySelectorAll('.skill-category').forEach(cat => {
  const tags = cat.querySelectorAll('.skill-tag');
  tags.forEach((tag, i) => {
    tag.style.transitionDelay = `${i * 40}ms`;
  });
});

// ─── CONTACT FORM ───
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all fields.', false);
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:amritanshukishor@gmail.com?subject=${subject}&body=${body}`);

    showToast('Opening your email client... 📬');
    contactForm.reset();
  });
}

function showToast(msg, success = true) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = success ? '#ffffff' : '#1a1a1a';
  toast.style.color = success ? '#000000' : '#ffffff';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── SCROLL INDICATOR HIDE ───
const scrollIndicator = document.getElementById('scroll-indicator');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollIndicator.style.opacity = '0';
    scrollIndicator.style.pointerEvents = 'none';
  } else {
    scrollIndicator.style.opacity = '1';
    scrollIndicator.style.pointerEvents = 'auto';
  }
});

// ─── COUNTER ANIMATION ───
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1500;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    if (target === '∞') {
      el.textContent = '∞';
    } else {
      el.textContent = Math.floor(eased * parseInt(target)) + suffix;
    }
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-number');
      nums.forEach(num => {
        const raw = num.textContent.replace('+','').replace('∞','');
        if (raw === '∞' || num.textContent === '∞') {
          return; // already static
        }
        const suffix = num.textContent.includes('+') ? '+' : '';
        animateCounter(num, num.textContent, '');
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.about-stats');
if (statsContainer) statsObserver.observe(statsContainer);

// ─── SPLINE LOADING STATE ───
const splineViewer = document.getElementById('spline-viewer');

if (splineViewer) {
  const cleanWatermark = () => {
    try {
      if (splineViewer.shadowRoot) {
        const logo = splineViewer.shadowRoot.querySelector('#logo') || splineViewer.shadowRoot.querySelector('a[href*="spline.design"]');
        if (logo) logo.style.display = 'none';
      }
    } catch (_) {}
  };

  splineViewer.addEventListener('load', cleanWatermark);
  // Polling checks during first few frames to ensure clean look
  setTimeout(cleanWatermark, 200);
  setTimeout(cleanWatermark, 600);
  setTimeout(cleanWatermark, 1200);
}

// ─── CURSOR CUSTOM (desktop only) ───
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 10px; height: 10px;
    background: #fff; border-radius: 50%;
    transform: translate(-50%,-50%);
    transition: transform 0.15s ease, width 0.2s, height 0.2s, opacity 0.2s;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  const cursorRing = document.createElement('div');
  cursorRing.id = 'cursor-ring';
  cursorRing.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9998;
    width: 36px; height: 36px;
    border: 1px solid rgba(255,255,255,0.4); border-radius: 50%;
    transform: translate(-50%,-50%);
    transition: transform 0.3s ease, width 0.3s, height 0.3s;
  `;
  document.body.appendChild(cursorRing);

  let cursorX = 0, cursorY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  });

  function animateRing() {
    ringX += (cursorX - ringX) * 0.12;
    ringY += (cursorY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand on interactive elements
  document.querySelectorAll('a, button, .project-card, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '56px';
      cursorRing.style.height = '56px';
      cursor.style.width = '6px';
      cursor.style.height = '6px';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursor.style.width = '10px';
      cursor.style.height = '10px';
    });
  });
}
