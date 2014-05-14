//This is for Example 1
$( '.demo1button' ).click(function() {
  	$( '.example1' ).fadeOut( 'slow', function() {
 	});
});

// This is for Example 2
$('.demo2button').click(function() {
	$(this).siblings('.example2').text('Why is this text popping up on the screen?');
});

//This is for Example 3
$(".demo3button").click(function () {
   $('.example3').slideToggle();
});

$(".demo3button").mouseout(function() {
	$('.example3').slideToggle();
})

// This is for Example 4
$('.demo4button').click(function() {
	$(this).siblings('.example4').css("background", $(this).val() + "black");
});

$('.demo4button').mouseout(function() {
  	$(this).siblings('.example4').css("background", $(this).val() + "#3498db");
    });

//This is for Example 5 ITS NOT WORKING PROPERLY
$('.demo5button').click(function () {
   $(this).hide('.example5').slideDown();
});

//This is for Example 6 ITS NOT WORKING PROPERLY 
$('.demo6button').click(function() {
	$('.textbox').hide().fadeIn(3000);
});

//This is for Example 7
 $(".demo7button").click(function () {
      $("li").css("background", "coral");
    });

 //This is for Example 8
$('.demo8button').click(function() {
  $('.example8').not(".colorwhite").css( "background", "black");
});

//This is for Example 9
$('.demo9button').click(function() {
  $('.partone').empty();
});

//This is for Example 10
$('.demo10button').click(function() {
  $('.parttwo').empty();
});

//This is for Example 11
$('.demo11button').click(function() {
	$('.partone').before('When you hit demo');
});

//This is for Example 12
$('.demo12button').click(function() {
	$('.partone').after('When you hit demo');
});

//This is for Example 13 
$( '.demo13button' ).click(function() {
  $( '.example13' ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    borderWidth: "10px"
  }, 1500 );
});

//This is for Example 14
$('.demo14button').click(function() {
	$(this).siblings('.example14').animate({opacity: 0.4,
    top: "+=10"});
});
