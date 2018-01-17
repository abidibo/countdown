var AppLive = function () {
  this.init = function () {
    this.liveEndTime = 1516357800000;
    this.setPressKitEvents();
  }

  this.setPressKitEvents = function () {

    var download = function (urls) {
      $.each(urls, function (k, v) {
        window.open(v);
      })
    }

    $('#press-kit-download-all').on('click', function () {
      var items = [];
      $('.press-kit-download-items input[type=checkbox]').each(function (k, v) {
        items.push($(v).attr('data-url'));
      });
      download(items);
    });

    $('#press-kit-download-selected').on('click', function () {
      var items = [];
      $('.press-kit-download-items input[type=checkbox]:checked').each(function (k, v) {
        items.push($(v).attr('data-url'));
      });
      download(items);
    })
  }

}
