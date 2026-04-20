const Settings = (() => {
  const STORAGE_KEY = 'user_settings';
  const GISCUS_REPO = 'Issunmi/birdschooleat_giscus';

  let settings = {
    darkMode: 'system',
    notifications: true
  };

  let user = null;

  function loadSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        settings = { ...settings, ...JSON.parse(saved) };
      }
      const savedUser = localStorage.getItem('giscus_user');
      if (savedUser) {
        user = JSON.parse(savedUser);
      }
    } catch (e) {
      console.warn('Failed to load settings:', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save settings:', e);
    }
  }

  function saveUser(userData) {
    try {
      if (userData) {
        localStorage.setItem('giscus_user', JSON.stringify(userData));
      } else {
        localStorage.removeItem('giscus_user');
      }
    } catch (e) {
      console.warn('Failed to save user:', e);
    }
  }

  function showToast(message) {
    const existing = document.querySelector('.settings-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'settings-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2100);
  }

  function updateDarkMode(mode) {
    settings.darkMode = mode;
    saveSettings();
    applyDarkMode();
  }

  function applyDarkMode() {
    const mode = settings.darkMode;
    const root = document.documentElement;

    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function updateNotificationSwitch(enabled) {
    settings.notifications = enabled;
    saveSettings();
    if (enabled) {
      requestNotificationPermission();
    }
  }

  function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  function clearCache() {
    const keysToKeep = [STORAGE_KEY];
    const allKeys = Object.keys(localStorage);

    allKeys.forEach(key => {
      if (!keysToKeep.includes(key)) {
        localStorage.removeItem(key);
      }
    });

    localStorage.removeItem('giscus-session');
    localStorage.removeItem('giscus_user');

    showToast('缓存已清理');
    updateUserUI(null);
  }

  function updateUserUI(userData) {
    const avatar = document.getElementById('userAvatar');
    const name = document.getElementById('userName');
    const desc = document.getElementById('userDesc');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (userData && userData.login) {
      name.textContent = userData.login;
      desc.textContent = '可在评论区发言';
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'flex';

      if (userData.avatar_url) {
        avatar.innerHTML = `<img src="${userData.avatar_url}" alt="${userData.login}">`;
      }
    } else {
      name.textContent = '未登录';
      desc.textContent = '登录后可在评论区发言';
      loginBtn.style.display = 'inline-flex';
      logoutBtn.style.display = 'none';
      avatar.innerHTML = '<span class="material-icons-round">person</span>';
    }
  }

  function login() {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = true;
    loginBtn.querySelector('span:last-child').textContent = '登录中...';

    const container = document.createElement('div');
    container.id = 'giscus-login-modal';
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;';
    container.innerHTML = '<div style="width:100%;max-width:600px;margin:16px;"><div class="giscus"></div></div>';
    document.body.appendChild(container);

    const giscusDiv = container.querySelector('.giscus');

    const giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.setAttribute('data-repo', GISCUS_REPO);
    giscusScript.setAttribute('data-repo-id', 'R_kgDOSGib7g');
    giscusScript.setAttribute('data-category', 'Announcements');
    giscusScript.setAttribute('data-category-id', 'DIC_kwDOSGib7s4C7Llw');
    giscusScript.setAttribute('data-mapping', 'specific');
    giscusScript.setAttribute('data-term', 'settings-login');
    giscusScript.setAttribute('data-strict', '0');
    giscusScript.setAttribute('data-reactions-enabled', '1');
    giscusScript.setAttribute('data-emit-metadata', '1');
    giscusScript.setAttribute('data-input-position', 'top');
    giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
    giscusScript.setAttribute('data-lang', 'zh-CN');
    giscusScript.setAttribute('data-loading', 'eager');
    giscusScript.setAttribute('crossorigin', 'anonymous');
    giscusScript.async = true;
    giscusDiv.appendChild(giscusScript);

    const loginMessageHandler = function(e) {
      if (e.origin !== 'https://giscus.app') return;
      const data = e.data;
      if (data && typeof data === 'object' && data.giscus) {
        console.log('Giscus login message:', data.giscus);

        let userData = null;
        let accessToken = null;

        if (data.giscus.user) {
          userData = {
            login: data.giscus.user.login || data.giscus.user.name || 'User',
            avatar_url: data.giscus.user.avatar_url || data.giscus.user.avatarUrl
          };
          accessToken = data.giscus.accessToken;
        } else if (data.giscus.config?.user) {
          userData = {
            login: data.giscus.config.user.login || data.giscus.config.user.name || 'User',
            avatar_url: data.giscus.config.user.avatar_url || data.giscus.config.user.avatarUrl
          };
          accessToken = data.giscus.config.accessToken;
        }

        if (userData && accessToken) {
          user = userData;
          saveUser(user);
          updateUserUI(user);
          container.remove();
          window.removeEventListener('message', loginMessageHandler);
          showToast('登录成功');
        }

        if (data.giscus.error === 'Authenticated failed. Check your credentials.') {
          loginBtn.disabled = false;
          loginBtn.querySelector('span:last-child').textContent = '登录';
          window.removeEventListener('message', loginMessageHandler);
          showToast('登录失败，请重试');
        }
      }
    };

    window.addEventListener('message', loginMessageHandler);

    container.onclick = (e) => {
      if (e.target === container) {
        container.remove();
        loginBtn.disabled = false;
        loginBtn.querySelector('span:last-child').textContent = '登录';
        window.removeEventListener('message', loginMessageHandler);
      }
    };
  }

  function logout() {
    localStorage.removeItem('giscus-session');
    localStorage.removeItem('giscus_user');
    user = null;
    showToast('已退出登录');
    updateUserUI(null);
  }

  function checkLoginFromSession() {
    const giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.setAttribute('data-repo', GISCUS_REPO);
    giscusScript.setAttribute('data-repo-id', 'R_kgDOSGib7g');
    giscusScript.setAttribute('data-category', 'Announcements');
    giscusScript.setAttribute('data-category-id', 'DIC_kwDOSGib7s4C7Llw');
    giscusScript.setAttribute('data-mapping', 'specific');
    giscusScript.setAttribute('data-term', 'settings-check');
    giscusScript.setAttribute('data-strict', '0');
    giscusScript.setAttribute('data-reactions-enabled', '0');
    giscusScript.setAttribute('data-emit-metadata', '1');
    giscusScript.setAttribute('data-input-position', 'bottom');
    giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
    giscusScript.setAttribute('data-lang', 'zh-CN');
    giscusScript.setAttribute('data-loading', 'eager');
    giscusScript.setAttribute('crossorigin', 'anonymous');
    giscusScript.async = true;

    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
    hiddenDiv.id = 'giscus-check';
    document.body.appendChild(hiddenDiv);
    hiddenDiv.appendChild(giscusScript);

    window.addEventListener('message', function handler(e) {
      if (e.origin !== 'https://giscus.app') return;
      const data = e.data;
      if (data && typeof data === 'object' && data.giscus) {
        console.log('Giscus session check:', data.giscus);

        let userData = null;

        if (data.giscus.user) {
          userData = {
            login: data.giscus.user.login || data.giscus.user.name || 'User',
            avatar_url: data.giscus.user.avatar_url || data.giscus.user.avatarUrl
          };
        } else if (data.giscus.config?.user) {
          userData = {
            login: data.giscus.config.user.login || data.giscus.config.user.name || 'User',
            avatar_url: data.giscus.config.user.avatar_url || data.giscus.config.user.avatarUrl
          };
        }

        if (userData) {
          user = userData;
          saveUser(user);
          updateUserUI(user);
        }

        if (data.giscus.error === 'Authenticated failed. Check your credentials.') {
          logout();
        }
      }
    });

    setTimeout(() => {
      const checkDiv = document.getElementById('giscus-check');
      if (checkDiv) checkDiv.remove();
    }, 30000);
  }

  function init() {
    loadSettings();

    const darkModeSelect = document.getElementById('darkModeSelect');
    const notificationSwitch = document.getElementById('notificationSwitch');

    if (darkModeSelect) {
      darkModeSelect.value = settings.darkMode;
      darkModeSelect.addEventListener('change', (e) => {
        updateDarkMode(e.target.value);
      });
    }

    if (notificationSwitch) {
      notificationSwitch.checked = settings.notifications;
      notificationSwitch.addEventListener('change', (e) => {
        updateNotificationSwitch(e.target.checked);
      });
    }

    applyDarkMode();

    if (user) {
      updateUserUI(user);
    } else {
      updateUserUI(null);
      checkLoginFromSession();
    }
  }

  return {
    init,
    login,
    logout,
    clearCache,
    updateDarkMode,
    updateNotificationSwitch,
    updateUserUI
  };
})();

document.addEventListener('DOMContentLoaded', Settings.init);
