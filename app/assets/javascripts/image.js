// // (function($){  
// //   // 無名関数($の競合を回避)
// //   // ポップアップ用のタグを消す

// //   $('#popup-background').hide();
// //   $('#popup-item').hide();
  
// //   // class「popupimg」のリンクがクリックされた時のイベント定義
// //   $('.popupimg').bind('click', function(e){
// //       // aタグでデフォルト動作を無効にする
// //       e.preventDefault(); 

// //       // 画像の読み込み
// //       var img = new Image();
// //       // クリックされたaタグのhrefを取得する
// //       var imgsrc = this.href;
      
// //       // Image()のロードイベントを定義する
// //       $(img).load(function(){
// //           $('#popup-item').attr('src', imgsrc);
// //           // ポップアップで表示するためのimgタグに画像が読み込まれているかチェックする
// //           $('#popup-item').each(function(){
// //               // 読み込み済みならばポップアップ表示用の関数を呼び出す
// //               if (this.complete) {
// //                   imgload(img);
// //                   return;
// //               }
// //           });
// //           // imgタグのロードイベントを定義
// //           $('#popup-item').bind('load', function(){
// //               // 画像がロードされたらポップアップ表示用の関数を呼び出す
// //               imgload(img);
// //           });
          
// //       });
// //       // Image()に画像を読み込ませる
// //       img.src = imgsrc;
// //   });
  
// //   // ポップアップされた領域のクリックイベント
// //   $('#popup-background, #popup-item').bind('click', function(){
// //       // ポップアップを消すため、タグをフェードアウトさせる
// //       $('#popup-background').fadeOut();
// //       $('#popup-item').fadeOut();
      
// //   });
  
// //   // ポップアップ表示用関数
// //   function imgload(imgsource){
// //       // ポップアップの背景部分を表示する
// //       $('#popup-background').fadeIn(function(){
// //           // 画像を中心に表示させるため、画像の半分のサイズを取得
// //           /* 
// //           * 画像を表示するimgタグ「popup-item」はCSSで画面の中心に
// //           * 表示するようにしているため、そのまま表示すると画像の左上の端が
// //           * 中心に来ます。
// //           * そのため、マイナスのマージンを画像の半分のサイズ設定します。
// //           */
// //           var item_hieght_margin = (imgsource.height / 2) * -1;
// //           var item_width_margin = (imgsource.width / 2) * -1;
          
// //           // 取得したマージンと画像のサイズをCSSで定義する
// //           var cssObj = {
// //               marginTop: item_hieght_margin
// //               , marginLeft: item_width_margin
// //               , width: imgsource.width
// //               , height: imgsource.height
// //           }
// //           // 画像の表示用タグにCSSを当て、表示を行う
// //           $('#popup-item').css(cssObj).fadeIn(100);
// //       });
// //   }
// // })(jQuery) 

// $(function (){
//   // 画像用のinputを生成する関数
//   const buildFileField = (index)=> {
//     const html = `<div data-index="${index}" class="js-file_group">
//                     <input class="js-file" type="file"
//                     name="post[images_attributes][${index}][image_url]"
//                     id="post_images_attributes_${index}_image_url"><br>
//                     <div class="js-remove">削除</div>
//                   </div>`;
//     return html;
//   }

//   // プレビュー用のimgタグを生成する関数
//   const buildImg = (index, url)=> {
//     const html = `<img data-index="${index}" src="${url}" width="100px" height="100px">`;
//     return html;
//   }

//   // file_fieldのnameに動的なindexをつける為の配列
//   let fileIndex = [1,2,3,4,5,6,7,8,9,10];

//   $('#image-box').on('change', '.js-file', function(e) {
//     // fileIndexの先頭の数字を使ってinputを作る
//     // $('#image-box').append(buildFileField(fileIndex[0]));
//     // fileIndex.shift();
//     // 末尾の数に1足した数を追加する
//     // fileIndex.push(fileIndex[fileIndex.length - 1] + 1)

//     const targetIndex = $(this).parent().data('index');
//     // ファイルのブラウザ上でのURLを取得する
//     const file = e.target.files[0];
//     const blobUrl = window.URL.createObjectURL(file);
//     // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
//     if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
//       img.setAttribute('src', blobUrl);
//     } else {  // 新規画像追加の処理
//       $('#previews').append(buildImg(targetIndex, blobUrl));
//       // fileIndexの先頭の数字を使ってinputを作る
//       $('#image-box').append(buildFileField(fileIndex[0]));
//       fileIndex.shift();
//       // 末尾の数に1足した数を追加する
//       fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
//     }

    
//   });

//   $('#image-box').on('click', '.js-remove', function() {
//     $(this).parent().remove();
//     // 画像入力欄が0個にならないようにしておく
//     if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
//     $(`img[data-index="${targetIndex}"]`).remove();

//   });

  
// });





$(function (){
  // 画像用のinputを生成する関数
  const buildFileField = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group">
                    <label>
                      <i class="far fa-image image-icon js-file"></i>
                      <input class="js-file no-disply" type="file"
                        name="post[images_attributes][${num}][image_url]"
                        id="post_images_attributes_${num}_image_url">
                    </label>
                  </div>`;
    return html;
  }

  const editFileField = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group">
                    <label>
                      <p>編集</p>
                      <input class="js-file no-disply" type="file"
                        name="post[images_attributes][${num}][image_url]"
                        id="post_images_attributes_${num}_image_url">
                    </label>
                  </div>`;
    return html;
  }


  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<div data-index="${index}" class="js-file_preview">
                    <img data-index="${index}" src="${url}" width="70px" height="70px">
                    <div class="js-remove">×</div>
                  </div>`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4];
  // 既に使われているindexを除外
  lastIndex = $('.js-file_group:last').data('index');
  // splice:インデックス0番目から、lastIndexの数だけ削除する
  fileIndex.splice(0, lastIndex);

  console.log(lastIndex);

  // $('.hidden-destroy').hide();

  // inputが押された時の挙動
  $('#image-box').on('change', '.js-file', function(e) {

    // イベントが発火した要素のデータindexの番号を取得
    const targetIndex = $(this).parent().parent().data('index');
    
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  
      // 新規画像追加の処理
      $('#previews').append(buildImg(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('#image-form').append(buildFileField(fileIndex[0]));
      // fileIndexの先頭の数字を削除
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);

      // プレビュー が4枚になるとinputを表示させない
      const count = $(".js-file_preview").length;
      if (count == 4) { 
        $('#image-form > .js-file_group:last').hide();
      }

      // 入力済みの画像のinputを非表示に
      $(this).parent().parent().addClass("no-disply");
      // 編集ボタンを表示させる
      $(`.js-file_preview[data-index="${targetIndex}"]`).append(editFileField(targetIndex));

    }

  });


  // 削除ボタンが押された時の挙動
  $('#image-box').on('click', '.js-remove', function() {

    // 押された削除ボタンの親要素のデータindexを取得
    const targetIndex = $(this).parent().data('index');
    
    // 該当indexを振られているチェックボックスを取得する
    // const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    // if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $(`.js-file_group[data-index="${targetIndex}"]`).remove();
    
    $("#image-form > .js-file_group:last").remove();
    // $('.js-file_group:last').remove();

    // $(`img[data-index="${targetIndex}"]`).remove();

    $('#image-form').append(buildFileField(targetIndex));

    // inputが0個にならないようにしておく
    if ($('.js-file_preview').length == 0) $('#image-form').append(buildFileField[0]);
  });

});