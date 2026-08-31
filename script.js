(function(){
  const container = document.getElementById('panContainer');
  if(!container) return; // e.g. on contact.html

  const panels = Array.from(container.querySelectorAll('.panel'));
  const dotsNav = document.getElementById('dots');
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');

  const isMobileLayout = () => window.matchMedia('(max-width: 860px)').matches;

  // Build progress dots
  panels.forEach((panel, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', 'Go to section ' + (i + 1));
    dot.addEventListener('click', () => goToPanel(i));
    dotsNav.appendChild(dot);
  });
  const dots = Array.from(dotsNav.querySelectorAll('.dot'));

  function currentIndex(){
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    return Math.round(scrollLeft / width);
  }

  function goToPanel(i){
    if(isMobileLayout()){
      panels[i].scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const clamped = Math.max(0, Math.min(panels.length - 1, i));
    container.scrollTo({ left: clamped * container.clientWidth, behavior: 'smooth' });
  }

  function updateDots(){
    const idx = currentIndex();
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  // Convert vertical wheel motion into horizontal pan (desktop only)
  container.addEventListener('wheel', (e) => {
    if(isMobileLayout()) return;
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  container.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDots);
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight'){ goToPanel(currentIndex() + 1); }
    if(e.key === 'ArrowLeft'){ goToPanel(currentIndex() - 1); }
  });

  arrowRight.addEventListener('click', () => goToPanel(currentIndex() + 1));
  arrowLeft.addEventListener('click', () => goToPanel(currentIndex() - 1));

  updateDots();
})();
