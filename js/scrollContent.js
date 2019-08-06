// Select all links with hashes
// $('a[href*="#"]')
// // Remove links that don't actually link to anything
// .not('[href="#"]')
// .not('[href="#0"]')
// .click(function(event) {
//   // On-page links
//   if (
//     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//     && 
//     location.hostname == this.hostname
//   ) {
//     // Figure out element to scroll to
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     // Does a scroll target exist?
//     if (target.length) {
//       // Only prevent default if animation is actually gonna happen
//       event.preventDefault();
//       var addTarget = target.offset().top - 20;
//       $('html, body').animate({
//         scrollTop: addTarget
//       }, 1000, function() {
//         // Callback after animation
//         // Must change focus!
//         var $target = $(target);
//         $target.focus();
//         if ($target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//           $target.focus(); // Set focus again
//         };
//       });
//     }
//   }
// });

// From https://css-tricks.com/snippets/jquery/smooth-scrolling/ user mrhorse

$(document).scroll(function(){
  var position = $(this).scrollTop();
  var goToTop = $('#goToTop');
  if(position>1400) {
    goToTop.fadeIn(500);
  } else if (position<1400) {
    goToTop.fadeOut(500);
  }
  // rozwiązać fadein i out
});


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

    if ($target.length) {
      var baseMinScrollTime = 800,
          baseMaxScrollTime = 1200;

      var docHeight = $(document).height(),
          triggerTop = $(this).offset().top,
          targetTop = $target.offset().top;

      var scrollProportion = (targetTop - triggerTop) / docHeight,
          relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
          // Create inverse relationship (quicker the further we scroll)
          scrollTime = -1 * (1 - relativeTime);

      $('html, body').animate({
        scrollTop: targetTop - 20
      }, scrollTime);
      return false;
    }
  }
});