 function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myTopnav").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.6)";
      }
      else {
        document.getElementById("myTopnav").style.boxShadow = "";
      }
    }
