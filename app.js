const App = (() => {
  const BACK_GESTURE_CONFIG = {
    edgeThreshold: 50,
    swipeThresholdRatio: 0.5,
    maxSwipeRatio: 0.8,
    modalTranslateRatio: 0.8,
    searchTranslateRatio: 0.5,
    overlayBaseOpacity: 0.4
  };

  let state = {
    currentCuisine: '全部',
    searchQuery: ''
  };

  let dom = {};

  function cacheDom() {
    dom = {
      filterChips: document.getElementById('filterChips'),
      featuredCards: document.getElementById('featuredCards'),
      restaurantGrid: document.getElementById('restaurantGrid'),
      searchBar: document.getElementById('searchBar'),
      searchInput: document.getElementById('searchInput'),
      searchBtn: document.getElementById('searchBtn'),
      closeSearch: document.getElementById('closeSearch'),
      modalOverlay: document.getElementById('modalOverlay'),
      restaurantModal: document.getElementById('restaurantModal'),
      modalContent: document.getElementById('modalContent'),
      closeModal: document.getElementById('closeModal'),
      backGestureIndicator: document.getElementById('backGestureIndicator')
    };
  }

  function getFilteredRestaurants() {
    let result = restaurants;
    if (state.currentCuisine !== '全部') {
      result = result.filter(r =>
        r.cuisine === state.currentCuisine ||
        r.cuisine.includes(state.currentCuisine) ||
        r.tags.some(t => t.includes(state.currentCuisine))
      );
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      result = result.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.menu.some(s => s.items.some(i => i.name.toLowerCase().includes(q)))
      );
    }
    return result;
  }

  const templates = {
    filterChip(cuisine) {
      const selected = cuisine === state.currentCuisine ? ' selected' : '';
      return `<button class="filter-chip${selected}" data-cuisine="${cuisine}">${cuisine}</button>`;
    },

    featuredCard(r) {
      return `
        <div class="featured-card" onclick="App.openRestaurantModal(${r.id})">
          <span class="material-icons-round featured-card__icon">${r.icon}</span>
          <h3 class="featured-card__title">${r.name}</h3>
          <p class="featured-card__subtitle">${r.cuisine} · ${r.location}</p>
        </div>`;
    },

    restaurantCard(r) {
      return `
        <div class="restaurant-card" onclick="App.openRestaurantModal(${r.id})">
          <div class="restaurant-card__header">
            <span class="material-icons-round restaurant-card__icon">${r.icon}</span>
            <h3 class="restaurant-card__name">${r.name}</h3>
            <p class="restaurant-card__cuisine">${r.cuisine}</p>
          </div>
          <div class="restaurant-card__content">
            <div class="restaurant-card__info">
              <div class="restaurant-card__rating">
                <span class="material-icons-round">star</span>${r.rating}
              </div>
            </div>
            <div class="restaurant-card__tags">
              ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`;
    },

    menuSection(section) {
      return `
        <div class="menu-section">
          <h3 class="menu-section__title">${section.category}</h3>
          <div class="menu-items">
            ${section.items.map(item => `
              <div class="menu-item">
                <div class="menu-item__info">
                  <h4 class="menu-item__name">${item.name}</h4>
                  <p class="menu-item__description">${item.description}</p>
                </div>
                <span class="menu-item__price">${item.price}</span>
              </div>
            `).join('')}
          </div>
        </div>`;
    },

    restaurantDetail(r) {
      const phoneSection = r.phone ? `
        <div class="restaurant-detail__phone">
          <span class="material-icons-round">phone</span>
          <span class="restaurant-detail__phone-number">${r.phone}</span>
          <button class="restaurant-detail__phone-btn" onclick="App.copyPhone('${r.phone}')" aria-label="复制号码">
            <span class="material-icons-round">content_copy</span>
          </button>
          <a class="restaurant-detail__phone-btn" href="tel:${r.phone}" aria-label="拨打电话">
            <span class="material-icons-round">call</span>
          </a>
        </div>` : '';
      return `
        <div class="restaurant-detail">
          <div class="restaurant-detail__header">
            <span class="material-icons-round restaurant-detail__icon">${r.icon}</span>
            <h2 class="restaurant-detail__name">${r.name}</h2>
            <div class="restaurant-detail__info">
              <div class="restaurant-card__info-item">
                <span class="material-icons-round">location_on</span>${r.location}
              </div>
              <div class="restaurant-card__rating">
                <span class="material-icons-round">star</span>${r.rating}
              </div>
            </div>
            ${phoneSection}
          </div>
          ${r.menu.map(templates.menuSection).join('')}
        </div>`;
    }
  };

  function animateContentTransition(renderFn) {
    dom.restaurantGrid.classList.add('content-fade-out');
    setTimeout(() => {
      renderFn();
      dom.restaurantGrid.classList.remove('content-fade-out');
      dom.restaurantGrid.classList.add('content-fade-in');
      setTimeout(() => {
        dom.restaurantGrid.classList.remove('content-fade-in');
      }, 300);
    }, 150);
  }

  function updateFeaturedVisibility(cuisine) {
    const section = document.querySelector('.featured-section');
    if (!section) return;
    if (cuisine === '全部') {
      section.classList.remove('featured-section--hidden');
    } else {
      section.classList.add('featured-section--hidden');
    }
  }

  function renderFilterChips() {
    dom.filterChips.innerHTML = cuisines.map(templates.filterChip).join('');
  }

  function renderFeaturedRestaurants() {
    const shuffled = [...restaurants].sort(() => Math.random() - 0.5);
    const count = Math.min(3, shuffled.length);
    dom.featuredCards.innerHTML = shuffled.slice(0, count).map(templates.featuredCard).join('');
  }

  function renderAllRestaurants() {
    dom.restaurantGrid.innerHTML = getFilteredRestaurants().map(templates.restaurantCard).join('');
  }

  function openRestaurantModal(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;
    dom.modalContent.innerHTML = templates.restaurantDetail(restaurant);
    dom.modalContent.scrollTop = 0;
    dom.modalOverlay.classList.add('active');
  }

  function closeRestaurantModal() {
    dom.restaurantModal.style.transition = '';
    dom.modalOverlay.style.transition = '';
    dom.restaurantModal.style.transform = '';
    dom.restaurantModal.style.opacity = '';
    dom.modalOverlay.style.opacity = '';
    dom.modalOverlay.classList.remove('active');
  }

  function closeSearchBar() {
    dom.searchBar.classList.remove('active');
    state.searchQuery = '';
    dom.searchInput.value = '';
    renderAllRestaurants();
  }

  function handleBackAction() {
    if (dom.modalOverlay.classList.contains('active')) {
      closeRestaurantModal();
      return true;
    }
    if (dom.searchBar.classList.contains('active')) {
      closeSearchBar();
      return true;
    }
    return false;
  }

  function setupBackGesture() {
    const cfg = BACK_GESTURE_CONFIG;
    const indicator = dom.backGestureIndicator;
    const arrow = indicator?.querySelector('.material-icons-round');

    let startX = 0, startY = 0;
    let swiping = false, isBack = false, progress = 0;

    const maxDist = () => window.innerWidth * cfg.maxSwipeRatio;

    function activeOverlay() {
      if (dom.modalOverlay.classList.contains('active')) return 'modal';
      if (dom.searchBar.classList.contains('active')) return 'search';
      return null;
    }

    function updateVisuals(p) {
      p = Math.max(0, Math.min(1, p));

      if (indicator) {
        indicator.style.opacity = Math.min(1, p * 2);
        indicator.style.left = `${Math.max(-60, -60 + p * 80)}px`;
        if (arrow) {
          arrow.style.transform = `scale(${0.5 + p * 0.5}) rotate(${-90 + p * 30}deg)`;
        }
        indicator.classList.toggle('active', p > 0.05);
      }

      const overlay = activeOverlay();
      if (overlay === 'modal') {
        dom.restaurantModal.style.transition = 'none';
        dom.restaurantModal.style.transform = `scale(${1 - p * 0.05})`;
        dom.restaurantModal.style.opacity = Math.max(0, 1 - p);
        dom.modalOverlay.style.transition = 'none';
        dom.modalOverlay.style.opacity = Math.max(0, 1 - p);
      }
      if (overlay === 'search') {
        dom.searchBar.style.transition = 'none';
        dom.searchBar.style.transform = `translateX(${p * window.innerWidth * cfg.searchTranslateRatio}px)`;
        dom.searchBar.style.opacity = Math.max(0, 1 - p);
      }
    }

    function resetVisuals() {
      if (indicator) {
        indicator.classList.remove('active');
        indicator.style.opacity = '';
        indicator.style.left = '';
        if (arrow) arrow.style.transform = '';
      }
      dom.restaurantModal.style.transform = '';
      dom.restaurantModal.style.opacity = '';
      dom.restaurantModal.style.transition = '';
      dom.modalOverlay.style.opacity = '';
      dom.modalOverlay.style.transition = '';
      dom.searchBar.style.transform = '';
      dom.searchBar.style.opacity = '';
      dom.searchBar.style.transition = '';
    }

    document.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      swiping = true;
      isBack = false;
      progress = 0;
      if (startX < cfg.edgeThreshold && activeOverlay()) isBack = true;
    }, { passive: true });

    document.addEventListener('touchmove', e => {
      if (!swiping || !isBack) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;

      if (Math.abs(dy) > Math.abs(dx)) { isBack = false; resetVisuals(); return; }
      if (dx > 0) {
        progress = Math.min(dx / maxDist(), 1);
        updateVisuals(progress);
      } else {
        isBack = false;
        resetVisuals();
      }
    }, { passive: true });

    document.addEventListener('touchend', () => {
      if (!swiping) return;
      swiping = false;
      if (isBack) {
        progress > cfg.swipeThresholdRatio ? handleBackAction() : resetVisuals();
      }
      isBack = false;
      progress = 0;
    }, { passive: true });

    document.addEventListener('touchcancel', () => {
      swiping = false;
      isBack = false;
      progress = 0;
      resetVisuals();
    }, { passive: true });
  }

  function setupAndroidBackButton() {
    try {
      if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
        const AppPlugin = Capacitor.Plugins?.App
          ?? (Capacitor.registerPlugin?.('App') ?? null);
        if (AppPlugin) {
          AppPlugin.addListener('backButton', ({ canGoBack }) => {
            if (!handleBackAction() && !canGoBack) AppPlugin.exitApp();
          });
        }
      }
    } catch (_) {}

    document.addEventListener('backbutton', e => {
      if (handleBackAction()) e.preventDefault();
    });
  }

  function bindEvents() {
    dom.searchBtn.addEventListener('click', () => {
      dom.searchBar.classList.add('active');
      dom.searchInput.focus();
    });

    dom.closeSearch.addEventListener('click', closeSearchBar);

    dom.searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value;
      renderAllRestaurants();
    });

    dom.filterChips.addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      state.currentCuisine = chip.dataset.cuisine;
      setTimeout(() => {
        renderFilterChips();
        updateFeaturedVisibility(state.currentCuisine);
        animateContentTransition(renderAllRestaurants);
      }, 200);
    });

    dom.closeModal.addEventListener('click', closeRestaurantModal);

    dom.modalOverlay.addEventListener('click', e => {
      if (e.target === dom.modalOverlay) closeRestaurantModal();
    });

    setupBackGesture();
    setupAndroidBackButton();
  }

  function init() {
    cacheDom();
    renderFilterChips();
    renderFeaturedRestaurants();
    renderAllRestaurants();
    bindEvents();
  }

  function copyPhone(phone) {
    navigator.clipboard.writeText(phone).then(() => {
      const toast = document.createElement('div');
      toast.className = 'restaurant-detail__phone-toast';
      toast.textContent = '已复制号码: ' + phone;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2100);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = phone;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      const toast = document.createElement('div');
      toast.className = 'restaurant-detail__phone-toast';
      toast.textContent = '已复制号码: ' + phone;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2100);
    });
  }

  return { init, openRestaurantModal, copyPhone };
})();

document.addEventListener('DOMContentLoaded', App.init);
