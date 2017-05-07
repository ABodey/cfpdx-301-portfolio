'use strict';

// create object for all of the functions that control what blog articles you see
var blogview = {};

// Populate filters with the authors and categories from the blogsource
blogview.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    // console.log("cat"+ $(this).attr('data-category'));
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

// changes the articles shown by selection of author
blogview.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    var selection = $(this).val();
    if (selection) {
      $('article').hide();
      $('article[data-author="' + selection + '"]').fadeIn(800);
    } else {
      $('article').not('.template').show();
    }
    $('#category-filter').val('');
  });
};

// changes the articles shown by selection of category
blogview.handleCategoryFilter = function() {
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

// changes the class so you only see the table content you choose base on main nav
blogview.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var selection = $(this).attr('data-content');
    $('#' + selection ).show();
  });
  $('.main-nav .tab:first').click();
};

//only shows the first <p> of each article untill you hit a button
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

//envoke all the functions in the object
blogview.populateFilters();
blogview.handleAuthorFilter();
blogview.handleCategoryFilter();
blogview.handleMainNav();
blogview.setTeasers();
