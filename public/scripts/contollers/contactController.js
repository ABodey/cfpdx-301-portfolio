'use strict';

(function (module) {
  const contactController = {};

  contactController.index = () => {
    $('main > section').hide();
    $('#contact').show().siblings().hide();
   
  };

  module.contactController = contactController;
})(window);
