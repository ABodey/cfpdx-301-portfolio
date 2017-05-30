'use strict';

(function (module) {
  const aboutController = {};

  aboutController.index = () => {
    $('main > section').hide();
    $('#about').show().siblings().hide();
   
  };

  module.aboutController = aboutController;
})(window);
