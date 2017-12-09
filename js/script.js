// SMOOTH SCROLLING
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// // MY OWN LIGHTBOX
$(document).ready(function(){

  $('.slide-images a').addClass('lightbox-trigger');

  $('.lightbox-trigger').click(function(){
    event.preventDefault();
    var href = $(this).attr('href');
    // var alt = $(this).attr('alt');
    $('#lightbox').fadeIn();
    $('#lightbox-content').html('<img src="' + href + '" />'
    // + '<p>' + alt + '</p>'
    );
    $("body").css("overflow","hidden");
  });

  $('#lightbox-close').click(function(){
    $('#lightbox').fadeOut();
    $("body").css("overflow","scroll");
  });
});





// APPENDING STUFF
$(document).ready(function(){

  // var close = '<div class="close">X</div>';
  // $('.slide-nav').append(close);

  //////////////////////////////////////////////////////////////

  $('.trigger').append('<div class="underline"></div>');

  //////////////////////////////////////////////////////////////

  // $('.slide-header').append('<p>(click me)</p>');

  //////////////////////////////////////////////////////////////

  // var line = '<div class="line-spacing"><div class="line"></div></div>';
  // var lineBackground = '<div class="line-background"></div>'
  //
  // $('#design .slide:first-of-type').append(lineBackground);
  // $('.line-background').append(line.repeat(200));

  //////////////////////////////////////////////////////////////

  var shape = '<div class="shape"></div>';
  var shapeBackground = '<div class="shape-background"></div>';

  $('#contact .slide:first-of-type').append(shapeBackground);
  $('.shape-background').append(shape.repeat(100));






  // DISPLAY IMAGE CAPTION
  $(".lightbox-trigger img").each(function(){
    var imageCaption = $(this).attr("alt");
    if (imageCaption != '') {
        $("<p class='img-caption'><em>" + imageCaption + "</em></p>").insertAfter(this);
    }
  });




});



// MAIN NAVIGATION MODAL WINDOW
$(document).ready(function(){
  $('.trigger, .ham-trigger').click(function(){
    $('.nav-background').fadeToggle(); //opens up nav modal
  });

  $('.nav-close, .main-nav li a').click(function(){
    $('.nav-background').fadeOut();
  });

  $('.main-nav li a').click(function(){
    $('body').removeClass('scroll-disable');
  });
});





// SLIDE NAVIGATION
$(document).ready(function(){

  $('.slide-header').click(function(){
    $(this).hide();
    $(this).next().fadeIn();
    $(this).parent().parent().children().show(); //Reveal the section's content
  });

  $('.slide-nav ul li a').click(function(){
    $('.slide-nav').delay(500).hide(0);
    $('.slide-header').delay(500).fadeIn();
  });
});





// Checking to see if something is visible on screen
$.fn.isVisible = function() {
    // Current distance from the top of the page
    var windowScrollTopView = $(window).scrollTop();

    // Current distance from the top of the page, plus the height of the window
    var windowBottomView = windowScrollTopView + $(window).height();

    // Element distance from top
    var elemTop = $(this).offset().top;

    // Element distance from top, plus the height of the element
    var elemBottom = elemTop + $(this).height();

    return ((elemBottom <= windowBottomView) && (elemTop >= windowScrollTopView));
}


// $(document).ready(function() {
//   var appear = "<div id='appear'></div>";
//   // var disappear = "<div id='disappear'></div>";
//   // var triggers = appear + disappear;
//   // var doublecheck = "<div id='double-check-appear'></div>";
//
//   $('section:nth-of-type(2) .slide:first-of-type').append(appear);
//   // $('section:not(:first) .slide').append(doublecheck);
//
//   // if($('section:nth-of-type(2)').isVisible()) {
//   //   $('.up').css('display','block');
//   // };
//
//   $(window).scroll(function() {
//       if($('#welcome').isVisible()) {
//         $('.up').fadeOut();
//       } else if($('#appear').isVisible()) {
//         $('.up').fadeIn();
//       };
//   });
// });





$(document).ready(function(){

  var returnArrow = '<div class="return"><div class="arrow"><div class="arrow-line"></div><div class="arrow-line"></div></div></div>';

  $('.project').append(returnArrow);

  $('.item').click(function(){
    $('header').fadeOut();
    $('section').not($(this).parent().parent().parent()).hide();//hide everything except 'header' or this section
    $(this).siblings().fadeOut(); // HIDE ALL SIBLINGS IN THE .project-grid, EXCEPT THE NEXT ONE WHICH WILL APPEAR USING THE NEXT LINE OF CODE
    $(this).next().fadeIn(); //PROJECT MODAL POPUP
    $(this).next().scrollTop(0); //RETURN TO TOP OF PROJECT WHEN CLICKING on Project
    $('body').addClass('scroll-disable'); //FREEZE BODY SCROLLING WHILE PROJECT MODAL IS UP
  });

  $('.return').click(function(){
    $('header').fadeIn();
    $('section').show();
    $('.item').show();
    $('body').removeClass('scroll-disable'); // ALLOW BODY SCROLLING AGAIN WHEN MODAL DISAPPEARS
    $('.project').fadeOut();
    $('html, body').animate({
        scrollTop: $($(this).parent().prev()).offset().top
    }, 0);
  });

  $(window).on('hashchange', function() {
      // event.preventDefault();
      $('header').fadeIn();
      $('section').show();
      $('.item').show();
      $('body').removeClass('scroll-disable'); // ALLOW BODY SCROLLING AGAIN WHEN MODAL DISAPPEARS
      $('.project').fadeOut();
  });

});
