var appConfig = {};
(function () {
  // debug purposes
  var DEV = /DEV/.test(location.hash);

  // var liveBeginUTC = 1516357800000;
  appConfig.countdownEndUTC = 1516262458000;
  appConfig.liveBeginUTC = new Date().getTime() + 4000;
  appConfig.liveEndUTC = 1516358800000;

  var isOnDemand = /ondemand/.test(location.pathname);
  var isLive = /live/.test(location.pathname);

  if (!DEV) {
    if (new Date().getTime() > appConfig.liveEndUTC && !isOnDemand) {
      location.href = 'ondemand.hmtl';
    } else if (new Date().getTime() > appConfig.countdownEndUTC && !isLive) {
      location.href = 'live.hmtl';
    } else {
      if (isLive || isOnDemand) {
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