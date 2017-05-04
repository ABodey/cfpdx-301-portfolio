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

//set the data to locations on index using handlebars and JQ
Article.prototype.toHtml = function() {
  var myCompile = Handlebars.compile($('#template').html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `,   ${this.daysAgo} days ago` : '(draft)';
  $('#articles').append(myCompile(this));
console.log("handlebars");
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
