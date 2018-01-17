var AppLive = function () {
  this.init = function () {
    this.manageLanguageChoice();
    this.checkOfferSection();
  }

  this.manageLanguageChoice = function () {
    var match = window.location.search.match(/lng=([^&]+)/);
    var lng = match && match.length > 1 ? match[1] : 'en';
    $('.choose-language li').removeClass('active');
    $('.choose-language li.lng-' + lng).addClass('active');
  }

  this.checkOfferSection = function () {
    var interval;

    var checkTime = function () {
      if (new Date().getTime() > appConfig.liveBeginUTC) {
        $('.discover').removeClass('hidden');
        clearInterval(interval);
      }
    };

    setInterval(checkTime, 5000);
  }
}
