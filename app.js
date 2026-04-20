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
        <div class="restaurant-detail" data-restaurant-id="${r.id}" data-restaurant-name="${r.name}">
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
          <div class="restaurant-detail__tabs">
            <button class="restaurant-detail__tab restaurant-detail__tab--active" data-tab="menu">
              <span class="material-icons-round">restaurant_menu</span>
              <span>菜单</span>
            </button>
            <button class="restaurant-detail__tab" data-tab="comments">
              <span class="material-icons-round">comment</span>
              <span>评论</span>
            </button>
          </div>
          <div class="restaurant-detail__content restaurant-detail__content--menu">
            ${r.menu.map(templates.menuSection).join('')}
          </div>
          <div class="restaurant-detail__content restaurant-detail__content--comments" style="display: none;">
            <div class="comments-rating-summary">
              <div class="comments-rating-summary__score">
                <span class="comments-rating-summary__number">0.0</span>
                <span class="comments-rating-summary__total">/ 5</span>
              </div>
              <div class="comments-rating-summary__stars">
                <span class="comments-rating-summary__star">★</span>
                <span class="comments-rating-summary__star">★</span>
                <span class="comments-rating-summary__star">★</span>
                <span class="comments-rating-summary__star">★</span>
                <span class="comments-rating-summary__star">★</span>
              </div>
              <div class="comments-rating-summary__count">
                <span class="comments-rating-summary__count-number">0</span> 条评分
              </div>
            </div>
            <div id="waline-container"></div>
          </div>
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

  let walineInstance = null;

  class RatingManager {
    constructor() {
      this.currentRating = 0;
      this.editorObserver = null;
      this.commentsObserver = null;
      this.isFetching = false;
      this.fetchTimer = null;
    }

    init() {
      this.currentRating = 0;
      this.isFetching = false;
      this.insertRatingUI();
      this.observeEditor();
      this.observeComments();
      setTimeout(() => {
        this.fetchRatingFromAPI();
      }, 500);
    }

    destroy() {
      if (this.editorObserver) {
        this.editorObserver.disconnect();
        this.editorObserver = null;
      }
      if (this.commentsObserver) {
        this.commentsObserver.disconnect();
        this.commentsObserver = null;
      }
      this.currentRating = 0;
    }

    insertRatingUI() {
      const panel = document.querySelector('#waline-container .wl-panel');
      if (!panel || panel.querySelector('.rating-component')) return;

      const ratingHTML = `
        <div class="rating-component">
          <span class="rating-prompt">你认为这家店怎么样</span>
          <div class="rating-stars">
            <span class="rating-star" data-rating="1">★</span>
            <span class="rating-star" data-rating="2">★</span>
            <span class="rating-star" data-rating="3">★</span>
            <span class="rating-star" data-rating="4">★</span>
            <span class="rating-star" data-rating="5">★</span>
          </div>
          <span class="rating-text"></span>
        </div>
      `;

      const header = panel.querySelector('.wl-header');
      if (header) {
        header.insertAdjacentHTML('beforebegin', ratingHTML);
      } else {
        panel.insertAdjacentHTML('afterbegin', ratingHTML);
      }

      this.bindStarEvents();
    }

    bindStarEvents() {
      const stars = document.querySelectorAll('.rating-star');
      stars.forEach(star => {
        star.addEventListener('click', () => {
          const rating = parseInt(star.dataset.rating);
          this.setRating(rating);
        });

        star.addEventListener('mouseenter', () => {
          const rating = parseInt(star.dataset.rating);
          this.highlightStars(rating);
        });

        star.addEventListener('mouseleave', () => {
          this.highlightStars(this.currentRating);
        });
      });
    }

    setRating(rating) {
      this.currentRating = rating;
      this.highlightStars(rating);
      this.updateRatingText(rating);
      this.syncRatingToEditor();
    }

    highlightStars(rating) {
      const stars = document.querySelectorAll('.rating-star');
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });
    }

    updateRatingText(rating) {
      const textEl = document.querySelector('.rating-text');
      if (!textEl) return;

      const texts = ['', '很差', '较差', '一般', '满意', '非常满意'];
      textEl.textContent = texts[rating] || '';
    }

    findEditorElement() {
      const container = document.getElementById('waline-container');
      if (!container) {
        console.log('[RatingManager] Container not found');
        return null;
      }

      // 打印整个容器结构
      console.log('[RatingManager] Container children:', container.children.length);
      
      // 查找所有可能的编辑器元素
      const allTextareas = container.querySelectorAll('textarea');
      const allInputs = container.querySelectorAll('input[type="text"], input:not([type])');
      const allContentEditables = container.querySelectorAll('[contenteditable="true"]');
      const allEditors = container.querySelectorAll('.wl-editor, .wl-editor-content, .wl-input');
      
      console.log('[RatingManager] Found - textareas:', allTextareas.length, 
                  'inputs:', allInputs.length, 
                  'contenteditables:', allContentEditables.length,
                  'editors:', allEditors.length);

      // 检查每个编辑器容器
      allEditors.forEach((editor, i) => {
        console.log(`[RatingManager] Editor ${i}:`, editor.className, editor.innerHTML.substring(0, 100));
      });

      // 尝试查找 textarea
      for (const textarea of allTextareas) {
        if (textarea.type !== 'hidden') {
          console.log('[RatingManager] Found textarea:', textarea.className);
          return { type: 'textarea', element: textarea };
        }
      }

      // 尝试查找 contenteditable
      for (const el of allContentEditables) {
        console.log('[RatingManager] Found contenteditable:', el.className);
        return { type: 'contenteditable', element: el };
      }

      // 尝试查找普通 input
      for (const input of allInputs) {
        if (!input.name || !['nick', 'mail', 'link'].includes(input.name)) {
          console.log('[RatingManager] Found input:', input.name, input.className);
          return { type: 'input', element: input };
        }
      }

      // 最后尝试：查找 .wl-editor-content
      const editorContent = container.querySelector('.wl-editor-content');
      if (editorContent) {
        console.log('[RatingManager] Found .wl-editor-content');
        return { type: 'contenteditable', element: editorContent };
      }

      console.log('[RatingManager] No editor element found');
      return null;
    }

    syncRatingToEditor() {
      const editorInfo = this.findEditorElement();
      if (!editorInfo) {
        console.log('[RatingManager] No editor element found for sync');
        return;
      }

      const { type, element } = editorInfo;
      const ratingPrefix = `rating:${this.currentRating} `;

      console.log('[RatingManager] Syncing rating:', this.currentRating, 'to', type);

      if (type === 'textarea') {
        let value = element.value;
        value = value.replace(/^rating:\d\s*/, '');
        element.value = ratingPrefix + value;
        element.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('[RatingManager] Textarea value set to:', element.value);
      } else if (type === 'contenteditable') {
        let html = element.innerHTML;
        html = html.replace(/^rating:\d\s*/, '');
        element.innerHTML = ratingPrefix + html;
        element.dispatchEvent(new Event('input', { bubbles: true }));
        console.log('[RatingManager] ContentEditable innerHTML set to:', element.innerHTML);
      }
    }

    observeEditor() {
      const container = document.getElementById('waline-container');
      if (!container) return;

      this.editorObserver = new MutationObserver(() => {
        const submitBtn = container.querySelector('.wl-btn-primary');
        if (submitBtn && !submitBtn.dataset.ratingHooked) {
          submitBtn.dataset.ratingHooked = 'true';
          submitBtn.addEventListener('click', (e) => {
            console.log('[RatingManager] Submit button clicked, currentRating:', this.currentRating);
            if (this.currentRating > 0) {
              this.syncRatingToEditor();
            }
          }, true);
          console.log('[RatingManager] Submit button hooked');
        }
      });

      this.editorObserver.observe(container, {
        childList: true,
        subtree: true
      });
    }

    observeComments() {
      const container = document.getElementById('waline-container');
      if (!container) return;

      this.processComments();

      this.commentsObserver = new MutationObserver(() => {
        this.processComments();
      });

      this.commentsObserver.observe(container, {
        childList: true,
        subtree: true
      });
    }

    processComments() {
      const container = document.getElementById('waline-container');
      const cards = container?.querySelectorAll('.wl-card');
      if (!cards || cards.length === 0) return;

      let hasNew = false;
      cards.forEach(content => {
        if (!content.classList.contains('wl-content')) {
          content = content.querySelector('.wl-content');
        }
        if (!content || content.dataset.ratingProcessed) return;

        hasNew = true;
        const textContent = content.textContent;
        const ratingMatch = textContent.match(/^rating:(\d)\s*/);
        if (ratingMatch) {
          const rating = parseInt(ratingMatch[1]);

          const ratingEl = document.createElement('div');
          ratingEl.className = 'comment-rating';
          for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'comment-rating-star' + (i <= rating ? ' active' : '');
            star.textContent = '★';
            ratingEl.appendChild(star);
          }

          content.insertBefore(ratingEl, content.firstChild);

          const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while (node = walker.nextNode()) {
            if (node.textContent.startsWith('rating:')) {
              node.textContent = node.textContent.replace(/^rating:\d\s*/, '');
              break;
            }
          }
        }

        content.dataset.ratingProcessed = 'true';
      });

      if (hasNew && this.fetchTimer) {
        clearTimeout(this.fetchTimer);
        this.fetchTimer = setTimeout(() => {
          this.updateRatingSummary();
        }, 500);
      }
    }

    updateRatingSummary() {
      const contents = document.querySelectorAll('#waline-container .wl-content');
      let totalRating = 0;
      let count = 0;

      contents.forEach(content => {
        const textContent = content.textContent;
        const ratingMatch = textContent.match(/^rating:(\d)\s*/);
        if (ratingMatch) {
          totalRating += parseInt(ratingMatch[1]);
          count++;
        }
      });

      const summaryContainer = document.querySelector('.comments-rating-summary');
      if (!summaryContainer) return;

      const averageRating = count > 0 ? (totalRating / count).toFixed(1) : '0.0';
      const numberEl = summaryContainer.querySelector('.comments-rating-summary__number');
      const countNumberEl = summaryContainer.querySelector('.comments-rating-summary__count-number');
      const stars = summaryContainer.querySelectorAll('.comments-rating-summary__star');

      if (numberEl) {
        numberEl.textContent = averageRating;
      }

      if (countNumberEl) {
        countNumberEl.textContent = count;
      }

      const avgRating = count > 0 ? totalRating / count : 0;
      stars.forEach((star, index) => {
        if (index < Math.round(avgRating)) {
          star.classList.add('active');
        } else {
          star.classList.remove('active');
        }
      });

      this.fetchRatingFromAPI();
    }

    async fetchRatingFromAPI() {
      if (this.isFetching) return;
      this.isFetching = true;

      const serverURL = 'https://api.zcservice.houlang.cloud/comment/25e9e3d439b09aa623650a2db95c7ae4';
      const restaurantDetail = document.querySelector('.restaurant-detail');
      const commentsPath = restaurantDetail?.dataset?.restaurantId;

      console.log('[RatingManager] Fetching ratings from API for path:', `/restaurant/${commentsPath}`);

      try {
        const response = await fetch(`${serverURL}/api/comment?path=/restaurant/${commentsPath}&page=1&size=100`);
        console.log('[RatingManager] API response status:', response.status);
        const data = await response.json();
        console.log('[RatingManager] API response data:', data);

        if (data.data && Array.isArray(data.data.data)) {
          console.log('[RatingManager] Total comments:', data.data.count);

          let totalRating = 0;
          let count = 0;

          data.data.data.forEach(comment => {
            console.log('[RatingManager] Comment content:', comment.comment);
            const ratingMatch = comment.comment.match(/<p>rating:(\d)\s*/);
            if (ratingMatch) {
              totalRating += parseInt(ratingMatch[1]);
              count++;
              console.log('[RatingManager] Found rating:', ratingMatch[1], 'in comment:', comment.comment.substring(0, 50));
            }
          });

          console.log('[RatingManager] Ratings found:', count, 'Total:', totalRating);

          if (count > 0) {
            const averageRating = (totalRating / count).toFixed(1);
            const summaryContainer = document.querySelector('.comments-rating-summary');
            if (summaryContainer) {
              const numberEl = summaryContainer.querySelector('.comments-rating-summary__number');
              const countNumberEl = summaryContainer.querySelector('.comments-rating-summary__count-number');
              const stars = summaryContainer.querySelectorAll('.comments-rating-summary__star');

              if (numberEl) {
                numberEl.textContent = averageRating;
              }

              if (countNumberEl) {
                countNumberEl.textContent = count;
              }

              const avgRating = totalRating / count;
              stars.forEach((star, index) => {
                if (index < Math.round(avgRating)) {
                  star.classList.add('active');
                } else {
                  star.classList.remove('active');
                }
              });
            }
          }
        }
      } catch (err) {
        console.log('[RatingManager] Failed to fetch rating from API:', err);
      } finally {
        this.isFetching = false;
      }
    }
  }

  const ratingManager = new RatingManager();

  function openRestaurantModal(id) {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;
    dom.modalContent.innerHTML = templates.restaurantDetail(restaurant);
    dom.modalContent.scrollTop = 0;
    dom.modalOverlay.classList.add('active');
    setupDetailTabs(restaurant);
  }

  function setupDetailTabs(restaurant) {
    const tabs = dom.modalContent.querySelectorAll('.restaurant-detail__tab');
    const menuContent = dom.modalContent.querySelector('.restaurant-detail__content--menu');
    const commentsContent = dom.modalContent.querySelector('.restaurant-detail__content--comments');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('restaurant-detail__tab--active')) return;

        tabs.forEach(t => t.classList.remove('restaurant-detail__tab--active'));
        tab.classList.add('restaurant-detail__tab--active');

        const tabType = tab.dataset.tab;
        const currentActive = menuContent.style.display !== 'none' ? menuContent : commentsContent;
        const nextContent = tabType === 'menu' ? menuContent : commentsContent;

        currentActive.classList.add('content-fade-out');
        setTimeout(() => {
          if (tabType === 'menu') {
            menuContent.style.display = 'block';
            commentsContent.style.display = 'none';
          } else if (tabType === 'comments') {
            menuContent.style.display = 'none';
            commentsContent.style.display = 'block';
            initWaline(restaurant.id, restaurant.name);
          }

          nextContent.classList.remove('content-fade-out');
          nextContent.classList.add('content-fade-in');
          setTimeout(() => {
            nextContent.classList.remove('content-fade-in');
          }, 300);
        }, 150);
      });
    });
  }

  async function initWaline(restaurantId, restaurantName) {
    const container = document.getElementById('waline-container');
    if (!container) return;
    
    if (walineInstance) {
      walineInstance.destroy();
      walineInstance = null;
    }
    
    container.innerHTML = '<div class="waline-loading"><span class="material-icons-round">sync</span><span>加载评论中...</span></div>';
    
    try {
      const { init } = await import('https://unpkg.com/@waline/client@v3/dist/waline.js');
      walineInstance = init({
        el: '#waline-container',
        serverURL: 'https://api.zcservice.houlang.cloud/comment/25e9e3d439b09aa623650a2db95c7ae4',
        path: `/restaurant/${restaurantId}`,
        lang: 'zh-CN',
        dark: 'auto',
        copyright: false,
        requiredMeta: ['nick'],
        placeholder: `对「${restaurantName}」有什么想说的？\n\n📌 温馨提示：\n• 图片只能上传128kb\n• 登录功能暂未完善，无需登录，填写昵称即可评论~`,
        rss: false,
      });
      
      setTimeout(() => {
        setupEditorLabel();
        setupInputOccupied();
        ratingManager.init();
        setupCommentRefresh(restaurantId, restaurantName);
      }, 100);
    } catch (err) {
      container.innerHTML = '<div class="waline-error"><span class="material-icons-round">error_outline</span><span>评论加载失败</span></div>';
    }
  }

  function setupEditorLabel() {
    const editor = document.querySelector('#waline-container .wl-editor');
    if (!editor || editor.querySelector('.wl-editor-label')) return;
    
    const label = document.createElement('span');
    label.className = 'wl-editor-label';
    label.textContent = '输入';
    editor.appendChild(label);
    
    const textarea = editor.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('input', () => {
        if (textarea.value) {
          editor.classList.add('wl-editor-occupied');
        } else {
          editor.classList.remove('wl-editor-occupied');
        }
      });
    }
  }

  function setupInputOccupied() {
    const inputs = document.querySelectorAll('#waline-container .wl-header-item input');
    inputs.forEach(input => {
      const item = input.closest('.wl-header-item');
      if (item) {
        // 检查初始状态
        if (input.value) {
          item.classList.add('wl-input-occupied');
        }

        input.addEventListener('input', () => {
          if (input.value) {
            item.classList.add('wl-input-occupied');
          } else {
            item.classList.remove('wl-input-occupied');
          }
        });
      }
    });
  }

  function setupCommentRefresh(restaurantId, restaurantName) {
    const container = document.getElementById('waline-container');
    if (!container || !walineInstance) return;

    let isSubmitting = false;

    const observer = new MutationObserver(() => {
      const submitBtn = container.querySelector('.wl-btn-primary');
      if (submitBtn && !submitBtn.dataset.refreshHooked) {
        submitBtn.dataset.refreshHooked = 'true';
        submitBtn.addEventListener('click', () => {
          if (isSubmitting) return;
          isSubmitting = true;

          setTimeout(async () => {
            try {
              showRefreshingAnimation(container);
              await refreshComments(restaurantId, restaurantName);
              ratingManager.init();
            } catch (err) {
              console.log('[App] 刷新评论失败:', err);
            } finally {
              isSubmitting = false;
            }
          }, 800);
        });
      }
    });

    observer.observe(container, {
      childList: true,
      subtree: true
    });

    if (walineInstance.on) {
      walineInstance.on('comment', async () => {
        try {
          showRefreshingAnimation(container);
          await refreshComments(restaurantId, restaurantName);
          ratingManager.init();
        } catch (err) {
          console.log('[App] 评论提交后刷新失败:', err);
        }
      });
    }
  }

  function showRefreshingAnimation(container) {
    const cards = container.querySelector('.wl-cards');
    if (cards) {
      cards.style.opacity = '0.5';
      cards.style.pointerEvents = 'none';
      cards.style.transition = 'opacity 0.3s ease';
    }

    let refreshIndicator = container.querySelector('.refresh-indicator');
    if (!refreshIndicator) {
      refreshIndicator = document.createElement('div');
      refreshIndicator.className = 'refresh-indicator';
      refreshIndicator.innerHTML = `
        <span class="material-icons-round" style="animation: spin 1s linear infinite;">sync</span>
        <span>正在刷新评论...</span>
      `;
      container.insertBefore(refreshIndicator, cards);

      setTimeout(() => {
        if (refreshIndicator.parentNode) {
          refreshIndicator.remove();
        }
      }, 2000);
    }
  }

  async function refreshComments(restaurantId, restaurantName) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        if (walineInstance) {
          walineInstance.destroy();
          walineInstance = null;
        }

        await initWaline(restaurantId, restaurantName);
        resolve();
      }, 500);
    });
  }

  function closeRestaurantModal() {
    if (walineInstance) {
      walineInstance.destroy();
      walineInstance = null;
    }
    ratingManager.destroy();
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
