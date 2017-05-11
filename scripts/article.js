'use strict';


//get all the data from blogsource
function Article (sourceArt) {
  this.title = sourceArt.title;
  this.category = sourceArt.category;
  this.author = sourceArt.author;
  this.authorUrl = sourceArt.authorUrl;
  this.publishedOn = sourceArt.publishedOn;
  this.body = sourceArt.body;

};

//create array in the object to hold all functions for the form
Article.all = [];

//set the data to locations on index using handlebars and JQ
Article.prototype.toHtml = function() {
  var myCompile = Handlebars.compile($('#template').html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `,   ${this.daysAgo} days ago` : '(draft)';
  return myCompile(this);
};

Article.loadAll = function (sourceData){
//sort by date
sourceData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});


//apply the funtions to each sourceArt
sourceData.forEach(function(articleObject) {
  Article.all.push(new Article(articleObject));
});
}

Article.fetchAll = function () {
  if (localStorage.sourceData) {
    Article.loadAll(JSON.parse(localStorage.sourceData));
    // blogView.initIndexPage();

} else {
  $.getJSON('data/blogSource.json', function (json){
    console.log('JSON data: ', json);
    localStorage.setItem('sourceData', JSON.stringify(json));
  });
  // blogView.initIndexPage();
}
  blogview.initIndexPage();

}

