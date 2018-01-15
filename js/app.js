var App = function () {
  this.init = function (rootElement) {
    this.rootElement = $(rootElement);
    this.difference = 1516357800000 - new Date().getTime();
    // this.difference = 1516029453330 - new Date().getTime();
    this.render();
  }

  this.render = function () {
    console.log(this.difference);
    if (this.difference > 0) {
      this.renderCountdown()
    }
  }

  this.renderCountdown = function () {
    $(document.body).attr('class', 'countdown');
    this.rootElement.empty();
    var title = $('<div />', {'class': 'content-main-title title-countdown'}).html('Event starts in');
    var self = this;
    $('#main-content').append([title, $('<div />', {id: 'countdown-widget'})])
    var clock = $('#countdown-widget').FlipClock(this.difference/1000, {
      clockFace: 'DailyCounter',
      countdown: true,
      showSeconds: false,
      stop: function () {
        self.renderLoginForm();
      }
    });
  }

  this.renderLoginForm = function () {
    $(document.body).attr('class', 'login-form');
    this.rootElement.empty();
    var title = $('<div />', {'class': 'content-main-title title-login-form'}).html('Sign in');
    var usernameField = $('<input />', {'class': 'input-username', placeholder: 'Username'})
    var passwordField = $('<input />', {'class': 'input-password', type: 'password', placeholder: 'Password'})
    var submitField = $('<input />', {'class': 'input-submit', type: 'button', value: 'Submit'})

    $('#main-content').append([
      title,
      usernameField,
      passwordField,
      submitField
    ])
  }

  this.renderLanguageChoice = function () {
    $(document.body).attr('class', 'language-choice');
    this.rootElement.empty();
    var title = $('<div />', {'class': 'content-main-title title-language-choice'}).html('Choose your language');
    var list = $('<ul />', {'class': 'language-list'});
    $.each(['ita', 'en', 'fr', 'de', 'es'], function (k, lng) {
      var item = $('<li />').html(lng).appendTo(list)
    });
    $('#main-content').append([
      title,
      list
    ])
  }
}
