
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
