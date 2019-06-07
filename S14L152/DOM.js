// Call the first paragraph in 4 different ways
var tag1 = document.getElementById('first');
console.log(tag1);

var tag2 = document.getElementsByClassName('special');
console.log(tag2[0]);

var tag3 = document.getElementsByTagName("p");
console.log(tag3[0]);

var tag4 = document.querySelector('#first');
console.log(tag4);

var tag5 = document.querySelector('p');
console.log(tag5);
