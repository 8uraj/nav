$(document).ready(function() {
    var lastScrollTop = 0;
    
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      
      if (scrollTop > lastScrollTop) {
        
        $('.navbar').addClass('scrolled');
      } else {
      
        $('.navbar').removeClass('scrolled');
      }
      
      lastScrollTop = scrollTop;
    });
  });
  