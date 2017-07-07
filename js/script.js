// $(document).ready(function() {
// 	$('#fullpage').fullpage({
//
//     anchors:['0','1','2','3','4','5'],
//     sectionsColor : ['white', 'pink','slategrey','darkkhaki','teal','beige'],
//     loopHorizontal: false,
//     showActiveTooltip: true,
// 		slidesNavigation: true,
//     controlArrows:false,
//     responsiveSlides: true,
//
//   //   afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
//   //   var loadedSlide = $(this);
//    //
//   //     //after loading the 0th (first) slide
//   //     if (slideIndex == 0){
//   //         $('div.fp-controlArrow').hide();
//   //     } else {
//   //         // $('div.fp-controlArrow').hide();
//   //     }
//   //  }
//
//   });
// });




$(document).ready(function(){
  $.scrollify({
    section : ".section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});












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



$(document).ready(function(){
  $('.logo, .trigger').append('<div class="underline"></div>');
});



$(document).ready(function(){

  $('.trigger').click(function(){
    $('.nav-background').fadeToggle();
  });

  $('.nav-background').click(function(){
    $(this).fadeOut();
  });
});


// WELCOME SQUIGGLE ANIMATION

// $(document).ready(function(){
//   var img = '<div class="image"></div>';
//   $('#welcome .background-animation').append(img.repeat(200));
// });
