'use strict';

(function(module) {
  const articleController = {};
  articleController.index = () => {
    Article.fetchAll(articleView.initIndexPage);

    $('main > section').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
