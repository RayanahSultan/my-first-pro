$(document).ready(function () 
{
    $("button").on("click", ChangeBackground)

      let body = document.querySelector("body");
      body.style.backgroundColor  = "black";
      
      let colors = [
          "#CD5C5C",
          "#FFC300",
          "#6495ED",
          "#E9967A",
          "#DFFF00",
      ];

      function ChangeBackground ()
       {
         let colorIndex = parseInt(Math.random()*colors.length);
         body.style.backgroundColor = colors[colorIndex]
       }
})