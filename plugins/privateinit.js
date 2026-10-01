(function () {
    'use strict';
	Lampa.Listener.follow('app', function (e) {
    if (e.type == 'ready') {
      setTimeout(function () {
       // $('[data-action=about]').eq(0).remove();
        $('[data-action=console]').eq(0).remove();
      }, 10);
	 setTimeout(function () {
		$('.open--feed').remove();
		$('.open--premium').remove();
		$('.notice--icon').remove();
		$('.full-screen').remove();

     
        Lampa.Storage.set('parental_control', 'true');
        Lampa.Storage.set('parental_control_pin', '7351');
        Lampa.Storage.set('parental_control_time', '120');


 Lampa.Utils.putScriptAsync(["http://lampa.nnmtv.pw/plugins/notrailer.js","http://lampa.nnmtv.pw/plugins/rus.js","http://lampa.nnmtv.pw/plugins/tv.js"], function() {});

    Lampa.Settings.listener.follow('open', function(e) {
      $(['plugins', 'webos_launcher'].map(function(c) {
        return '[data-component="' + c + '"]';
      }).join(','), e.body).remove();
    });

	}, 1000);
    }
  });	
})();