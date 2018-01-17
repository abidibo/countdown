var config = {};
(function () {
  var liveBeginUTC = 1516357800000;
  var liveEndUTC = 1516358800000;
  var isOnDemand = /ondemand/.test(location.pathname);
  var isLive = /live/.test(location.pathname);

  if (new Date().getTime() > liveEndUTC && !isOnDemand) {
    location.href = 'ondemand.hmtl';
  } else if (new Date().getTime() > liveBeginUTC && !isLive) {
    location.href = 'live.hmtl';
  } else {
    if (isLive || isOnDemand) {
      location.href = 'index.html';
    }
  }

  if (isLive) {
    var checkEnd = function () {
      if (new Date().getTime() > liveEndUTC) {
        location.href = 'ondemand.html';
      }
    }
    setInterval(checkEnd, 5 * 1000);
  }

  config.liveBeginUTC = liveBeginUTC;
  config.liveEndUTC = liveEndUTC;
})();
