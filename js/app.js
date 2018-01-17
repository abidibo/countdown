var App = function () {
  this.init = function (rootElement) {
    this.rootElement = $(rootElement);
    this.storage = window.localStorage;
    this.difference = config.liveBeginUTC - new Date().getTime();
    // this.difference = new Date().getTime() + 68000 - new Date().getTime();
    this.render();
  }

  this.render = function () {
    if (this.difference > 0) {
      this.renderCountdown()
    } else {
      location.href = 'live.html';
    }/* else if (this.storage.getItem('authenticated')) {
      this.renderLanguageChoice();
    } else {
      this.localStorage.clear();
      this.renderLoginForm()
      }*/
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
        location.href='live.html';
        // self.renderLoginForm();
      }
    });
  }

  this.renderLoginForm = function () {
    var self = this;
    $(document.body).attr('class', 'login-form');
    this.rootElement.empty();
    var title = $('<div />', {'class': 'content-main-title title-login-form'}).html('Sign in');
    var loginError = $('<div />', {'class': 'login-form-error'}).html('Wrong username and/or password');
    var usernameField = $('<div />', {'class': 'input-username-wrapper'}).append(
      $('<input />', {'class': 'input-username', placeholder: 'Username'})
    );
    var passwordField = $('<div />', {'class': 'input-password-wrapper'}).append(
      $('<input />', {'class': 'input-password', type: 'password', placeholder: 'Password'})
    );
    var submitField = $('<input />', {'class': 'input-submit', type: 'button', value: 'Submit'}).on('click', function () {
      var res = self.checkLogin($('.input-username').val(), $('.input-password').val());
      if (res) {
        loginError.removeClass('force-display');
        self.storage.setItem('authenticated', true);
        self.renderLanguageChoice();
      } else {
        loginError.addClass('force-display');
      }
    });

    $('#main-content').append([
      title,
      loginError,
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
      var item = $('<li />').html('<a href="live.html#' + lng + '">' + lng + '</a>').appendTo(list);
    });
    $('#main-content').append([
      title,
      list
    ])
  }

  this.checkLogin = function (username, password) {
    var hash = md5(username+password);
    return hash === 'd440aed189a13ff970dac7e7e8f987b2';
  }
}
