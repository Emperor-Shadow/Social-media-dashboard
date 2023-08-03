var toggler = document.querySelector(".toggler-btn-in");

/*toggler.addEventListener("click" , ()=>{
  if(toggler.style.right !== 0) {
    toggler.style.left = 0;
    toggler.style.right = "1px";
  } else {
    toggler.style.left = "0px";
  }
  
  toggler.toggleAttribute()
})*/


$(".toggler-btn-out").click(function () {
  $(".toggler-btn-out").toggleClass("bgtog")
  $('.toggler-btn-in').toggleClass("toggle");
  $('body').toggleClass("fire");
})
