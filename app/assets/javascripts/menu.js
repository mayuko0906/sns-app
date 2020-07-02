$(function (){

  // ヘッダーのドロップダウンメニュー
  $('.dropdown-btn').hover(
    function() {
      //カーソルが重なった時
      $(this).children('.dropdown').addClass('open');
    }, function() {
      //カーソルが離れた時
      $(this).children('.dropdown').removeClass('open');
    }
  );

  // アラートメッセージ
  setTimeout(function(){
        $('.notification').slideUp('slow');
    },1500);

    // $('.nav-toggle').on('click', function() {
    //     // $('.gloval-nav').addClass('open');
    //     // $('.gloval-nav').removeClass('open');

    //     if($('.gloval-nav').hasClass("open")) {
    //       // 位置を移動させメニューを開いた状態にする
    //       rightVal = -300;
    //       // メニューを開いたら次回クリック時は閉じた状態になるよう設定
    //       $('.gloval-nav').removeClass("open");
    //   } else {
    //       // メニューを開いたら次回クリック時は閉じた状態になるよう設定
    //       $('.gloval-nav').addClass("open");
    //   }
    // });

  });


