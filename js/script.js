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

  $('.slide-header').append('<p>(click me)</p>');

  //////////////////////////////////////////////////////////////

  var line = '<div class="line-spacing"><div class="line"></div></div>';
  var lineBackground = '<div class="line-background"></div>'

  $('#design .slide:first-of-type').append(lineBackground);
  $('.line-background').append(line.repeat(200));

  //////////////////////////////////////////////////////////////



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
    $('.nav-background').fadeToggle();
  });

  $('.nav-background').click(function(){
    $(this).fadeOut();
  });
});



// SLIDE NAVIGATION
$(document).ready(function(){

  $('.slide-header').click(function(){
    $(this).hide();
    $(this).next().fadeIn();
  });

  $('.close').click(function(){
    $(this).parent().hide();
    $(this).parent().prev().fadeIn();
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
            $('.up').fadeIn(500);
        } else {
            $('.up').fadeOut(500);
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
