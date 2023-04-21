// JavaScript

$(document).ready(function(){
  $(".carta").hover(function(){
      $(this).find(".front").css("transform", "perspective(600px) rotateY(180deg)");
      $(this).find(".back").css("transform", "perspective(600px) rotateY(360deg)");
  }, function(){
      $(this).find(".front").css("transform", "perspective(600px) rotateY(0deg)");
      $(this).find(".back").css("transform", "perspective(600px) rotateY(180deg)");
  });
});
