'use strict';

var articles = [];

function Article (sourceArt) {
  this.title = sourceArt.title;
  this.category = sourceArt.category;
  this.author = sourceArt.author;
  this.authorUrl = sourceArt.authorUrl;
  this.publishedOn = sourceArt.publishedOn;
  this.body = sourceArt.body;

};

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

sourceData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

sourceData.forEach(function(articleObject) {
  console.log("sourceData");
  articles.push(new Article(articleObject));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
