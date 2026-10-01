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
  window.lampa_settings.account_use = true;   // cub - Использовать аккаунты
  window.lampa_settings.account_sync = true;  // cub - Синхронизировать закладки, таймкоды и прочее
  window.lampa_settings.plugins_store = true; // cub магазин расширений
  window.lampa_settings.feed = false;          // cub лента
  window.lampa_settings.iptv = false;         // Является ли приложение IPTV
  window.lampa_settings.white_use = false;    // Белая и пушистая лампа, для одобрения модерации
  window.lampa_settings.push_state = true;    // адрес в url /?card=1241982&media=movie 
  window.lampa_settings.lang_use = true;      // Подключить другие языки интерфейса, по умолчанию только русский и английский
  window.lampa_settings.plugins_use = true;   // Разрешить установку плагинов и расширений
  window.lampa_settings.dcma = false;         // Добавить список блокировки карточек, пример: [{"id":3566556,"cat":"movie"},...]
  window.lampa_settings.services = false;      // Различные сервисы cub в приложении
  window.lampa_settings.youtube = true;       // Подключить YouTube API
  window.lampa_settings.geo = true;           // Определять гео по IP, иначе будет RU
  window.lampa_settings.mirrors = true;       // Использовать поиск зеркал

  window.lampa_settings.disable_features = window.lampa_settings.disable_features || {};
  window.lampa_settings.disable_features.dmca = true;           // шлет нахер правообладателей - on
  window.lampa_settings.disable_features.ads = true;            // Вспомогатиленые сервисы на подписку према
  window.lampa_settings.disable_features.reactions = false;     // cub реакции
  window.lampa_settings.disable_features.discuss = false;       // cub комментарии
  window.lampa_settings.disable_features.ai = false;            // cub AI-поиск
  window.lampa_settings.disable_features.install_proxy = false; // cub tmdb proxy
  window.lampa_settings.disable_features.subscribe = true;     // cub подписки
  window.lampa_settings.disable_features.blacklist = false;     // Черный список плагинов
  window.lampa_settings.disable_features.persons = true;       // Подписка на актеров
  window.lampa_settings.disable_features.trailers = true;      // Трейлеры
  window.lampa_settings.disable_features.remote_configuration = true;     // Удаленная конфигурация
  window.lampa_settings.disable_features.lgbt = true;           // Разрешить ЛГБТ контент

  window.lampa_settings.developer = window.lampa_settings.developer || {};
  
  
  // //////////////
// Переименуйте файл lampainit-invc.js в lampainit-invc.my.js
// //////////////


var lampainit_invc = {};


// Лампа готова для использования 
lampainit_invc.appload = function appload() {
  // Lampa.Utils.putScriptAsync(["http://lam.nnmtv.pw:45444/myplugin.js"]);  // wwwroot/myplugin.js
  // Lampa.Utils.putScriptAsync(["http://lam.nnmtv.pw:45444/plugins/ts-preload.js", "https://nb557.github.io/plugins/online_mod.js"]);
  // Lampa.Storage.set('proxy_tmdb', 'true');
  // etc
};


// Лампа полностью загружена, можно работать с интерфейсом 
lampainit_invc.appready = function appready() {
  // $('.head .notice--icon').remove();
};


// Выполняется один раз, когда пользователь впервые открывает лампу
lampainit_invc.first_initiale = function firstinitiale() {
  // Здесь можно указать/изменить первоначальные настройки 
  // Lampa.Storage.set('source', 'tmdb');
};


// Ниже код выполняется до загрузки лампы, например можно изменить настройки 
// window.lampa_settings.push_state = false;
// localStorage.setItem('cub_domain', 'mirror-kurwa.men');
// localStorage.setItem('cub_mirrors', '["mirror-kurwa.men"]');


/* Контекстное меню в online.js
window.lampac_online_context_menu = {
  push: function(menu, extra, params) {
    menu.push({
      title: 'TEST',
      test: true
    });
  },
  onSelect: function onSelect(a, params) {
    if (a.test)
      console.log(a);
  }
};
*/


  var timer = setInterval(function() {
    if (typeof Lampa !== 'undefined') {
      clearInterval(timer);
	  
      if (lampainit_invc)
        lampainit_invc.appload();

      var unic_id = Lampa.Storage.get('lampac_unic_id', '');
      if (!unic_id) {
        unic_id = Lampa.Utils.uid(8).toLowerCase();
        Lampa.Storage.set('lampac_unic_id', unic_id);
      }

 Lampa.Utils.putScriptAsync(["http://lampa.nnmtv.pw/plugins/privateinit.js","http://lampa.nnmtv.pw/plugins/surs.js","http://lampa.nnmtv.pw/plugins/record.js"]);

      if (window.appready) {
        start();
      }
      else {
        Lampa.Listener.follow('app', function(e) {
          if (e.type == 'ready') {
            start();
          }
        });
      }

	  
    }
  }, 200);

  function start() {
    
	
    if (lampainit_invc) lampainit_invc.appready();
    if (Lampa.Storage.get('lampac_initiale', 'false')) return;

    Lampa.Storage.set('language','ru');
    Lampa.Storage.set('lampac_initiale', 'true');
    Lampa.Storage.set('source', 'NNMTV');
    Lampa.Storage.set('video_quality_default', '1080');
    Lampa.Storage.set('proxy_tmdb_auto', 'true');            // Для RU включить tmdb proxy
    Lampa.Storage.set('proxy_tmdb', 'true');                 // Для RU включить tmdb proxy
    Lampa.Storage.set('poster_size', 'w300');
    Lampa.Storage.set('navigation_type', 'mouse');
    Lampa.Storage.set('background', 'false');
    Lampa.Storage.set('pages_save_total', '3');
    Lampa.Storage.set('protocol','http');
    Lampa.Storage.set('shots_in_card', false);
    Lampa.Storage.set('shots_in_player', false);
  
    Lampa.Storage.set('menu_sort', '["Главная","Фильмы","Сериалы","Мультфильмы","Русское","Избранное","Фильтр","История","IPTV","Радио","18+"]');
    Lampa.Storage.set('menu_hide','["Лента","Торренты","Персоны","Расписание","Подписки","Источник","Каталог","Релизы","Аниме","Спорт","Shots","18+","Клубничка"]');
    Lampa.Storage.set('lme_pubtorr_firstrun', 'false');
    Lampa.Storage.set('parser_use', 'false');
    Lampa.Storage.set('jackett_url','jac.red');
    Lampa.Storage.set('jackett_key','');
    Lampa.Storage.set('parser_torrent_type','jackett');

    var plugins = Lampa.Plugins.get();

    var plugins_add = [{"url":"http://lam.nnmtv.pw:45444/tmdbproxy.js","status":1,"name":"TMDB Proxy","author":"lampac"},{"url":"http://lam.nnmtv.pw:45444/cubproxy.js","status":1,"name":"CUB Proxy","author":"lampac"},{"url":"http://lam.nnmtv.pw:45444/online.js","status":1,"name":"Онлайн","author":"lampac"},{"url":"http://lam.nnmtv.pw:45444/sisi.js","status":1,"name":"Клубничка","author":"lampac"},{"url":"http://lam.nnmtv.pw:45444/startpage.js","status":1,"name":"Стартовая страница","author":"lampac"}];

    var plugins_push = [];

    plugins_add.forEach(function(plugin) {
      if (!plugins.find(function(a) {
          return a.url == plugin.url;
        })) {
        Lampa.Plugins.add(plugin);
        Lampa.Plugins.save();

        plugins_push.push(plugin.url);
      }
    });

    if (plugins_push.length) Lampa.Utils.putScript(plugins_push, function() {}, function() {}, function() {}, true);
	
    if (lampainit_invc)
      lampainit_invc.first_initiale();

  }
})();