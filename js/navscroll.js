// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      document.getElementById("navbar__logobox").style.padding = "1.5rem 0";
      document.getElementById("navbar").style.opacity = ".96";
      //document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar__logobox").style.padding = "3rem 0";
      document.getElementById("navbar").style.opacity = "1";
      //document.getElementById("logo").style.fontSize = "35px";
    }
  }