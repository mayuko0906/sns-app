$(function (){
  // 画像用のinputを生成する関数
  const buildFileField = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group">
                    <label>
                      <i class="far fa-image image-icon js-file"></i>
                      <input class="js-file no-disply" type="file"
                        name="post[images_attributes][${num}][image_url]"
                        id="post_images_attributes_${num}_image_url">
                      <span>画像を添付</span>
                    </label>
                  </div>`;
    return html;
  }

  // 編集ボタンを生成する関数
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

    // 削除ボタンの親要素(.js-file_preview)を削除
    $(this).parent().remove();

    // 非表示になっていた、押された削除ボタンのデータindexのinputを削除
    $(`.js-file_group[data-index="${targetIndex}"]`).remove();
    
    // 今表示されていた次の画像用のinputを消す
    $("#image-form > .js-file_group:last").remove();

    // 押された削除ボタンのデータindex番号のinputを生成
    $('#image-form').append(buildFileField(targetIndex));

    // inputが0個にならないようにしておく
    if ($('.js-file_preview').length == 0) $('#image-form').append(buildFileField[0]);
  });

});