
$('#music-frame').hide();
  $('.Boxes').hide();
   $('.Boxes2').hide();
$('#boxes').hide();
$('#back').hide();
$('#gobox').hide();


$('#boomRoom').on('click', function() {
  $('p').hide();
  $('#boomRoom').hide();
  $('#boxRoom').hide();
  $('#music-frame').show();
  $('#back').show();
  $('.Boxes').hide();
  $('.Boxes2').hide();
  $('#boxRoom2').hide();

});

$('#boxRoom').on('click', function() {
  $('p').hide()
  $('.Boxes').show();
  $('.Boxes2').hide();
  $('#boomRoom').hide();
  $('#boxRoom').hide();
  $('#back').show();
  $('#boxes').hide();
  $('#boxRoom2').hide();
  $('#gobox').show();
});

$('#gobox').on('click', function() {
$('#Box1').animate({
      top: '150px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, 'slow', function () { $(this).removeAttr('style'); });

$('#Box2').animate({
      bottom: '10px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, 'slow', function () { $(this).removeAttr('style');}
    );})

var x=1;

$('#boxRoom2').on('click', function() {
  $('p').hide()
   $('.Boxes').hide();
  $('.Boxes2').show();
  $('#boomRoom').hide();
  $('#boxRoom').hide();
  $('#back').show();
  $('#boxRoom2').hide();
  alert('Work in Progress');
});

$("#box1").position({
  my: "top left",
  at: "top left",
  of: "#boxes"
});

$("#box2").position({
  my: "right",
  at: "right",
  of: "#boxes"
});

$('#back').on('click', function() {
  $('p').show();
  $('#boomRoom').show();
  $('#boxRoom').show();
  $('#music-frame').hide();
  $('#back').hide();
  $('.Boxes').hide();
  $('#boxes').hide();
  $('#boxRoom2').show();
  $('#gobox').hide();

})

var name  = 'Zoe'; // Declaring a String variable named Zoe
var age = 38; // number

console.log(name) // this logs the variable name into the console
var ageInADecade = age + 10;
console.log(ageInADecade + age);


$('#ageSubmit').on('click', function() {
  var age = $('#ageInput').val(); // val stands for value, and it reads the value
  age = parseInt(age); // parse a number from the string into the input

// log a console error if age is NaN & display to output, otherwise add 10 and display
  if (isNaN(age)) {
    console.log('You did not enter a number!');
    $('.outputMessage').text('You did not enter a number');
  }
  else {
    console.log('This is the age input:', age, age.length);
    var ageInADecade = age + 10;
    $('.outputMessage').text('You will be ${age} in 10 years');
  }
});

// $('.currentAge').text(age);
// $('.decadeAge').text(ageInADecade);



// here's an array
var arrayOfStrings = ['Apple','Berry','CocaCola','D'];
console.log(arrayOfStrings[0])

arrayOfStrings.forEach(function (name) { //name is all the elements inside the object you are performing the fucntion on
  console.log(name);
})

// objects
var zoeObject = {
  age: 52,
  favoriteColor: 'pink',
}
zoeObject.livesIn = 'Brooklyn'
zoeObject.favoriteDrink = 'painkiller'

console.log(zoeObject.favoriteColor, zoeObject.favoriteDrink);
