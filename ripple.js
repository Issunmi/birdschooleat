(function () {
  var RIPPLE_DURATION = 600;

  var SELECTORS = [
    '.featured-card',
    '.restaurant-card',
    '.filter-chip',
    '.icon-button',
    '.bottom-nav__item-icon-wrapper',
    '.restaurant-detail__tab',
    '#waline-container .wl-btn',
    '#waline-container .wl-action',
    '#waline-container .wl-page-button'
  ];

  var SELECTOR_STR = SELECTORS.join(', ');

  var lastTouchTime = 0;

  function findRippleTarget(el) {
    if (el.matches('.bottom-nav__item-icon-wrapper')) return el;
    if (el.closest('.bottom-nav__item-icon-wrapper')) {
      return el.closest('.bottom-nav__item-icon-wrapper');
    }
    for (var i = 0; i < SELECTORS.length; i++) {
      if (el.matches(SELECTORS[i])) return el;
      var closest = el.closest(SELECTORS[i]);
      if (closest) return closest;
    }
    return null;
  }

  function createRipple(event) {
    var target = findRippleTarget(event.target);
    if (!target) return;

    var ripple = document.createElement('span');
    var rect = target.getBoundingClientRect();

    var clientX, clientY;
    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if (event.clientX !== undefined) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    }

    var size = Math.max(rect.width, rect.height);
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = (clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (clientY - rect.top - size / 2) + 'px';
    ripple.classList.add('ripple');
    target.appendChild(ripple);
    setTimeout(function () { ripple.remove(); }, RIPPLE_DURATION);
  }

  document.addEventListener('mousedown', function (e) {
    if (Date.now() - lastTouchTime < 800) return;
    if (e.target.closest(SELECTOR_STR)) createRipple(e);
  });

  document.addEventListener('touchstart', function (e) {
    lastTouchTime = Date.now();
    if (e.target.closest(SELECTOR_STR)) createRipple(e);
  }, { passive: true });
})();
