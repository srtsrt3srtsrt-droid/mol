(function() {
  'use strict';

  window.lampac_version = {major: 2, minor: 1};

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'ru');
    localStorage.setItem('tmdb_lang', 'ru');
  }

  localStorage.setItem('cub_mirrors', '["mirror-kurwa.men"]');
  
  window.lampa_settings = window.lampa_settings || {};
  window.lampa_settings.torrents_use = true;    // Показывать кнопку торрентов
  window.lampa_settings.demo = false;           // demo off
  window.lampa_settings.read_only = false;      // Режим только для чтения, без кнопок онлайн и расширений
  window.lampa_settings.socket_use = true;      // cub - Использовать сокеты для синхронизации данных
  window.lampa_settings.socket_url = undefined; // cub - Адрес сокета, по умолчанию лампа берет адреса из манифеста
  window.lampa_settings.socket_methods = true;  // cub - Обрабатывать сообщения сокетов
  window.lampa_settings.account_use = true;     // cub - Использовать аккаунты
  window.lampa_settings.account_sync = true;    // cub - Синхронизировать закладки, таймкоды и прочее
  window.lampa_settings.plugins_store = true;   // cub магазин расширений
  window.lampa_settings.feed = false;           // cub лента
  window.lampa_settings.iptv = false;           // Является ли приложение IPTV
  window.lampa_settings.white_use = false;      // Белая и пушистая лампа, для одобрения модерации
  window.lampa_settings.push_state = true;      // адрес в url /?card=1241982&media=movie 
  window.lampa_settings.lang_use = true;        // Подключить другие языки интерфейса, по умолчанию только русский и английский
  window.lampa_settings.plugins_use = true;     // Разрешить установку плагинов и расширений
  window.lampa_settings.dcma = false;           // Добавить список блокировки карточек, пример: [{"id":3566556,"cat":"movie"},...]
  window.lampa_settings.services = false;       // Различные сервисы cub в приложении
  window.lampa_settings.youtube = true;         // Подключить YouTube API
  window.lampa_settings.geo = true;             // Определять гео по IP, иначе будет RU
  window.lampa_settings.mirrors = true;         // Использовать поиск зеркал

  window.lampa_settings.disable_features = window.lampa_settings.disable_features || {};
  window.lampa_settings.disable_features.dmca = true;           // шлет нахер правообладателей - on
  window.lampa_settings.disable_features.ads = true;            // ОТКЛЮЧИТЬ РЕКЛАМУ
  window.lampa_settings.disable_features.reactions = false;     // cub реакции
  window.lampa_settings.disable_features.discuss = false;       // cub комментарии
  window.lampa_settings.disable_features.ai = false;            // cub AI-поиск
  window.lampa_settings.disable_features.install_proxy = false; // cub tmdb proxy
  window.lampa_settings.disable_features.subscribe = true;      // cub подписки
  window.lampa_settings.disable_features.blacklist = false;     // Черный список плагинов
  window.lampa_settings.disable_features.persons = true;        // Подписка на актеров
  window.lampa_settings.disable_features.trailers = true;       // Трейлеры
  window.lampa_settings.disable_features.remote_configuration = true; // Удаленная конфигурация
  window.lampa_settings.disable_features.lgbt = true;           // Разрешить ЛГБТ контент

  window.lampa_settings.developer = window.lampa_settings.developer || {};

  // ===== Отключение рекламы =====
  window.lampa_settings.disable_features.ads = true;
  localStorage.setItem('ads_use', 'false');
  localStorage.setItem('ads_disabled', 'true');
  localStorage.setItem('disable_ads', 'true');
  localStorage.setItem('premium_use', 'false');

  // Блокировка загрузки рекламных скриптов
  window.lampa_settings.no_ads = true;
  window.lampa_settings.adblock = true;
})();