var appConfig = {};
(function () {
  // debug purposes
  if(/DEV/.test(location.hash)) {
    window.localStorage.setItem('DEV', true);
  }

  if(/PROD/.test(location.hash)) {
    window.localStorage.setItem('DEV', false);
  }

  var DEV = window.localStorage.getItem('DEV') && window.localStorage.getItem('DEV') === 'true';

  // var liveBeginUTC = 1516357800000;
  appConfig.countdownEndUTC = 1516262458000;
  appConfig.liveBeginUTC = new Date().getTime() + 4000;
  appConfig.liveEndUTC = 1516358800000;

  var isOnDemand = /ondemand/.test(location.pathname);
  var isLive = /live/.test(location.pathname);

  console.info('ms to countdown end', appConfig.countdownEndUTC - new Date().getTime());
  console.info('ms to live begin', appConfig.liveBeginUTC - new Date().getTime());
  console.info('ms to live end', appConfig.liveEndUTC - new Date().getTime());

  if (!DEV) {
    if (new Date().getTime() > appConfig.liveEndUTC && !isOnDemand) {
      location.href = 'ondemand.html';
    } else if (new Date().getTime() > appConfig.countdownEndUTC && !isLive) {
      location.href = 'live.html';
    } else {
      if ((isLive || isOnDemand) && new Date().getTime() < (appConfig.countdownEndUTC - 60000))  {
        location.href = 'index.html';
      }
    }

    // check swith to ondemand every 5 seconds
    if (isLive) {
      var checkEnd = function () {
        if (new Date().getTime() > appConfig.liveEndUTC) {
          location.href = 'ondemand.html';
        }
      }
      setInterval(checkEnd, 5 * 1000);
    }
  }
})();
