$(document).ready(function(){

var promise = $.ajax('http://www.omdbapi.com/?t=Goonies&y=&plot=short&r=json');

promise.then(function(response) {

  console.log(response);

  var movie1 = response;

  $('#one').append('<h2>' + movie1.Title + '</h2>');
  $('#one').append('<img src=\'' + movie1.Poster + '\' />');
  $('#one').append('<p>Stars List: ' + movie1.Actors + '</p>');


})

var promise2 = $.ajax('http://www.omdbapi.com/?t=Star+Wars+&y=&plot=short&r=json');

promise2.then(function(response) {

  console.log(response);

  var movie2 = response;

  $('#two').append('<h2>' + movie2.Title + '</h2>');
  $('#two').append('<img src=\'' + movie2.Poster + '\' />');
  $('#two').append('<p>Stars List: ' + movie2.Actors + '</p>');


})
var promise3 = $.ajax('http://www.omdbapi.com/?t=big+lebowski&y=&plot=short&r=json');

promise3.then(function(response) {

  console.log(response);

  var movie3 = response;

  $('#three').append('<h2>' + movie3.Title + '</h2>');
  $('#three').append('<img src=\'' + movie3.Poster + '\' />');
  $('#three').append('<p>Stars List: ' + movie3.Actors + '</p>');


})

// Code below was a short-lived experiment trying to add search functionality to the search bar copied from the API

// var promise4 = $.ajax("<a href = 'http://www.omdbapi.com/?t=' + JSON.parse('.control-label') + '&y=&plot=short&r=json'>""</a>");
$('#search-by-title-button').on('click', function(){
  var promise4 =$.ajax('http://www.omdbapi.com/?t=' + '.control-label' + '&y=&plot=short&r=json');
  promise4.then(function(response){
  var movie4 = response;
  $('.your-info').append('<h2>' + response.Title + '<h2>');
})
})

});
