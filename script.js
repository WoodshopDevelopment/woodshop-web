// Woodshop Development – script.js
// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme palette switching (Terracotta, Lilac, Forest)
function setPalette(name) {
  const body = document.body;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  body.classList.remove('theme-warm', 'theme-lilac', 'theme-forest');
  if (name === 'warm') {
    body.classList.add('theme-warm');
    metaTheme?.setAttribute('content', '#1e1e1e');
  } else if (name === 'lilac') {
    body.classList.add('theme-lilac');
    metaTheme?.setAttribute('content', '#18181b');
  } else if (name === 'forest') {
    body.classList.add('theme-forest');
    metaTheme?.setAttribute('content', '#f5f2ea');
  }
}

// Sticky-header aware smooth scrolling
(function(){
  const header = document.querySelector('header');
  const setHeaderH = () => document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  setHeaderH();
  window.addEventListener('resize', setHeaderH);

  document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - (header.offsetHeight + 12);
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

// Diagnostics (optional): add ?test=1 to URL to run quick checks
(function(){
  const qs = new URLSearchParams(location.search);
  if(qs.get('test') !== '1') return;
  const el = (s)=>document.querySelector(s);
  console.group('Self-tests');
  console.assert(!!el('section.hero'), 'Hero section missing');
  console.assert(typeof setPalette === 'function', 'setPalette() not defined');
  console.assert(!!document.querySelector('meta[name="theme-color"]'), 'theme-color meta missing');
  ['#services','#process','#privacy','#contact'].forEach(id=>console.assert(!!el(id), `Missing section ${id}`));
  console.groupEnd();
})();
