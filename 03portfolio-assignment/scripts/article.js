'use strict';

//create aticle object to hold all functions for the form
var articles = [];

//get all the data from blogsource
function Article (sourceArt) {
  this.title = sourceArt.title;
  this.category = sourceArt.category;
  this.author = sourceArt.author;
  this.authorUrl = sourceArt.authorUrl;
  this.publishedOn = sourceArt.publishedOn;
  this.body = sourceArt.body;

};

//set the data to locations on index using JQ
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  $newArticle.find('h1').html(this.title);
  $newArticle.find('a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.authorUrl);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('.article-picture').html(this.picture);
  $newArticle.find('time').text(this.publishedOn+'  ('+'about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago'+')');


  return $newArticle;
};

//sort by date
sourceData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//apply the funtions to each sourceArt
sourceData.forEach(function(articleObject) {
  console.log("sourceData");
  articles.push(new Article(articleObject));
});

//append them to the html
articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
