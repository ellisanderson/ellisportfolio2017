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
    $('.project').hide();
    $('.return').fadeOut();
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





// BACK TO TOP BUTTON APPEAR ON SCROLL
$(document).ready(function(){
    var height = $(window).height();

    $(window).scroll(function(){
        if ($(this).scrollTop() >= height) {
            $('.up').fadeIn(300);
        } else {
            $('.up').fadeOut(300);
        }
    });
});





// HEADER BACKGROUND-COLOR APPEAR ON SCROLL
$(document).ready(function(){
  var height = $(window).height();

  $(window).scroll(function(){
      if ($(this).scrollTop() >= height) {
          $('header').css('background-color','black');
      } else {
          $('header').css('background-color','transparent');
      }
  });
});


$(document).ready(function(){
  $('.item').click(function(){
    $('.return').fadeIn(); // WHEN PROJECT MODAL APPEARS, BACK BUTTON APPEARS
    $('.logo').fadeOut(); //HIDE LOGO WHEN PROJECT MODAL APPEARS
    $(this).next().fadeIn(); //PROJECT MODAL POPUP
    $(this).next().scrollTop(0); //RETURN TO TOP OF PROJECT WHEN CLICKING on Project
    $('body').addClass('scroll-disable'); //FREEZE BODY SCROLLING WHILE PROJECT MODAL IS UP

    // $('body').on('touchmove', function(e){
    //   if($('.scroll-disable').has($(e.target)).length) e.preventDefault();
    // });

  });

  $('.main-nav li a, .return').click(function(){
    $('.logo').fadeIn(); // APPEARS AGAIN WHEN RETURNING TO HOME SCREEN
    $('body').removeClass('scroll-disable'); // ALLOW BODY SCROLLING AGAIN WHEN MODAL DISAPPEARS
  });

  $('.return').click(function(){
    $(this).fadeOut(); // WHEN CLICKING BACK, BUTTON DISAPPEARS
    $('.project').fadeOut(); // AND PROJECT MODAL DISAPPEARS TOO
  });

});




(function () {
    var _overlay = document.querySelector('.project');
    var _clientY = null; // remember Y position on touch start

    _overlay.addEventListener('touchstart', function (event) {
        if (event.targetTouches.length === 1) {
            // detect single touch
            _clientY = event.targetTouches[0].clientY;
        }
    }, false);

    _overlay.addEventListener('touchmove', function (event) {
        if (event.targetTouches.length === 1) {
            // detect single touch
            disableRubberBand(event);
        }
    }, false);

    function disableRubberBand(event) {
        var clientY = event.targetTouches[0].clientY - _clientY;

        if (_overlay.scrollTop === 0 && clientY > 0) {
            // element is at the top of its scroll
            event.preventDefault();
        }

        if (isOverlayTotallyScrolled() && clientY < 0) {
            //element is at the top of its scroll
            event.preventDefault();
        }
    }

    function isOverlayTotallyScrolled() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
    }
}())
