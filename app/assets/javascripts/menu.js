$(function (){

  $('.dropdown-btn').hover(
  function() {
    //カーソルが重なった時
    $(this).children('.dropdown').addClass('open');
  }, function() {
    //カーソルが離れた時
    $(this).children('.dropdown').removeClass('open');
  }
);
// $( document ).ready(function() {
//   // メッセージを３秒後にフェードアウトする
// });

// $('.notification').ready(function() {
//   // メッセージを３秒後にフェードアウトする
//   $(this).remove();
// });

// $('.notification').fadeOut("slow");


    setTimeout(function(){
        $('.notification').slideUp('slow');
    },1500);

});