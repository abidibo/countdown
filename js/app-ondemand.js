var AppOnDemand = function () {
  this.init = function () {
    this.manageLanguageChoice();
    this.enableComments();
  }

  this.manageLanguageChoice = function () {
    var match = window.location.search.match(/lng=([^&]+)/);
    var lng = match && match.length > 1 ? match[1] : 'it';
    $('.choose-language li').removeClass('active');
    $('.choose-language li.lng-' + lng).addClass('active');
  }

  this.enableComments = function() {
    $('#send-form').on('click', function () {
      var name = $('#id-name').val();
      var magazine = $('#id-magazine').val();

      if(name || magazine) {
        var data = {
          title: 'FCA form',
          content: name + ' || ' + magazine
        };

        $.ajax({
          type: 'POST',
          url: 'https://d1lpzqwpc3lk0a.cloudfront.net/notes/',
          data: JSON.stringify(data),
          success: function(data) { },
          contentType: "application/json",
          dataType: 'json'
        });

        $('#id-name').val('');
        $('#id-magazine').val('');
      }
    })
  }
}
