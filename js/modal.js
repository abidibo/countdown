 var VideoModal = function(url, params) {
  var opts = {};

  this.init = function(params) {
    this.url = url;
    this.modal = $('#dynamicModal');
    this.options = $.extend({}, opts, params);
    this.setSize();
    this.setTitle();
    this.setContent();
    this.hideFooter();
  };

  this.setSize = function () {
    this.modal.find('.modal-dialog').addClass('modal-lg');
  }

  this.setTitle = function() {

      if(typeof this.options.title != 'undefined') {
          this.modal.find('.modal-title').html(this.options.title);
      }

  };

  this.setContent = function() {
      var self = this;
      var content = '<div id="mediaspace"></div>';
      self.modal.find('.modal-body').html(content);
      // height: "540",
      var match = window.location.search.match(/lng=([^&]+)/);
      var lng = match && match.length > 1 ? match[1] : 'en';
      console.log('YOUR LANGUAGE: ' + lng);
      var player = jwplayer("mediaspace").setup({
        width: "100%",
        abouttext: "Powered By FeedbackItalia",
        "playlist": [
          {
            "sources": [
              {
                "default": false,
                "file": this.url,
                // "file": "https://content.jwplatform.com/manifests/yp34SRmf.m3u8",
                "type": "hls",
                "label": "0",
                "preload": "metadata"
              }
            ],
            mediaid: "s6hRjMKQ",
            "title": "Video Live " + lng.toUpperCase(),
            piwikResource: "trackURL.mp4.m3u8"
          }
        ],
        "primary": "html5",
        "hlshtml": true,
        "autostart": true,
      }
     );
    this.modal.on('hidden.bs.modal', function (e) {
      player.stop();
    })
  };

  this.hideFooter = function () {
    $('.modal-footer').hide();
  }

  this.open = function() {
      this.modal.modal();
  };

  this.init(params);
}
