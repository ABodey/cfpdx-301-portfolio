//  REVIEW: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var blogview = {};


blogview.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

blogview.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    var selection = $(this).val();
    if (selection) {
      /* TODO: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      $('article[data-author="' + selection + '"]').fadeIn(800);
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('article').not('.template').show();
    }
    $('#category-filter').val('');
  });
};

blogview.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function () {
    var selection = $(this).val();
    if (selection) {
      $('article').hide();
      $('article[data-category="' + selection + '"]').fadeIn(800);
    } else {
      $('article').not('.template').show();
    }
    $('#author-filter').val('');
  })
};

blogview.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var selection = $(this).attr('data-content');
    if (selection === 'articles') {
      $('#articles').show();
      $('#about').hide();
      $('#contact').hide();
    } else if (selection === 'about') {
      $('#articles').hide();
      $('#about').show();
      $('#contact').hide();
    } else if (selection === 'contact') {
      $('#articles').hide();
      $('#about').hide();
      $('#contact').show();
    }
  });
  $('.main-nav .tab:first').click();
};

blogview.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.read-on').click(function() {
    // console.log("read-on", $(this).text());
    if($(this).text() === 'Keep Reading') {
      $(this).siblings('section').find('p').fadeIn(423);
      $(this).text('Show Less');
    } else if ($(this).text() === 'Show Less'){
      $('.article-body *:nth-of-type(n+2)').hide();
      $(this).text('Keep Reading');
    }
  });
}

blogview.populateFilters();
blogview.handleAuthorFilter();
blogview.handleCategoryFilter();
blogview.handleMainNav();
blogview.setTeasers();
