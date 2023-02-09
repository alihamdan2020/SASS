var a =document.getElementById("burger");
a.addEventListener("click",function() {
   var menu=document.getElementsByClassName("menue")[0];
   menu.style.display="flex";
})  

var colors=document.querySelectorAll(".color");
colors.forEach(function(span){
   span.addEventListener("click",function(){
      if(span.getAttribute("data-color")=="red")
         document.body.classList.add("color2");
         else
         document.body.classList.add("color3");
   })
})