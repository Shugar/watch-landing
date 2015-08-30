(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("initialize", function(exports, require, module) {
$(document).ready(function() {
  var header;
  Parse.initialize('WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu', 'bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H');
  $('.popup').hide();
  $('.popup2').hide();
  $('.popup-close').click(function() {
    $('.popup').hide();
    return $('.popup2').hide();
  });
  $(".popup-show").click(function() {
    return $(".popup").show();
  });
  $('.navbar').find('.circle').click(function() {
    $('.circle').removeClass('active');
    return $(this).addClass('active');
  });
  $('.slider').slick({
    fade: true,
    speed: 1000,
    autoplay: true,
    dots: true,
    cssEase: 'ease-in-out'
  });
  $('.slider-review').slick();
  header = new Headhesive('.footer', {
    offset: 500
  });
  $(".fanc").fancybox();
  $('a[href*=#]').bind('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 700, function() {
      return location.hash = target;
    });
    return false;
  });
  $('.send').click(function() {
    var a, b, c;
    a = $('#name').val();
    b = $('#numb').val();
    c = $('#email').val();
    Parse.Cloud.run('sendmail', {
      target: 'myulysseshop@gmail.com',
      originator: 'clock-landing@mail.ru',
      subject: 'Заявка на получение скидки',
      text: "Имя: " + a + ", Номер: " + b + ", Email: " + c
    }, {
      success: function(success) {
        return console.log(success);
      },
      error: function(error) {
        return console.log(error);
      }
    });
    return $('.popup2').show();
  });
  $('.send2').click(function() {
    var a, b, c;
    a = $('#name2').val();
    b = $('#numb2').val();
    Parse.Cloud.run('sendmail', {
      target: 'myulysseshop@gmail.com',
      originator: 'clock-landing@mail.ru',
      subject: 'Заказ звонка',
      text: "Имя: " + a + ", Номер: " + b
    }, {
      success: function(success) {
        return console.log(success);
      },
      error: function(error) {
        return console.log(error);
      }
    });
    return $('.popup2').show();
  });
  return $('.timer').countdown({
    until: '+4h 26m 25s'
  });
});
});

;
//# sourceMappingURL=app.js.map