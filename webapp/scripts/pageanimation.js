var myVar;
      
      function myFunction() {
        myVar = setTimeout(showPage, 1500);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("allwebpage").style.display = "block";
      }
      