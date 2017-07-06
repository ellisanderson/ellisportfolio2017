$(document).ready(function() {
	$('#fullpage').fullpage({

    anchors:['0','1','2','3','4','5'],
    sectionsColor : ['white', 'pink','slategrey','darkkhaki','teal','beige'],
    loopHorizontal: false,
    showActiveTooltip: true,
		slidesNavigation: true,
    controlArrows:false,

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
    var loadedSlide = $(this);

      //after loading the 0th (first) slide
      if (slideIndex == 0){
          $('div.fp-controlArrow').hide();
      } else {
          // $('div.fp-controlArrow').hide();
      }
   }

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

$(document).ready(function(){
  var img = '<div class="image"></div>';
  $('#welcome .fp-tableCell .background-animation').append(img.repeat(200));
});
