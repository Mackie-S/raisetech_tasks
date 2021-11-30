$(function(){

  $(".has-sub").hover(function(){
    $(this).children(".sub").stop().slideToggle('fast');
    $(this).children(".plus").toggleClass(".active");
  });

  let $window = $(this).width();
  let bp = 1200;

  if($window > bp){
    $(".has-sub").show();
  }

  $(".menuBtn").on("click", function(){
    $(".has-sub").slideToggle("fast");
    $(".menuBtn").toggleClass("active")
  });

  $(window).resize(function(){
    let $window = $(this).width();
    let bp = 1200;
    
    if($window > bp){
      $(".has-sub").show();
      $(".menuBtn").removeClass("active");
    }else{
      $(".has-sub").hide();
      $(".menuBtn").removeClass("active");
    }
  });

});
// git練習のためコメントアウト