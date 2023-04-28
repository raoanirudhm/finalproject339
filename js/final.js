function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
  });
  