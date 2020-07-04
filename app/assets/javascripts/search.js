$(function() {
  var search_list = $(".posts");

  // function appendPost(post) {
  //   var html = `<div class="content_post" style="background-image: url(${tweet.image});">
  //                 <div class="more">
  //                   <span><img src="/assets/arrow_top.png"></span>
  //                   <ul class="more_list">
  //                     <li>
  //                       <a href="/tweets/${tweet.id}" data-method="get" >詳細</a>
  //                     </li>
  //                     ${current_user}
  //                   </ul>
  //                 </div>
  //                 <p>${tweet.text}</p><br>
  //                 <span class="name">
  //                   <a href="/users/${tweet.user_id}">
  //                     <span>投稿者</span>${tweet.nickname}
  //                   </a>
  //                 </span>
  //               </div>`
  //   search_list.append(html);
  // }


  function appendPost(post) {
    var html = `<div class="post">
                  <div class="user-icon">
                    <a href="/users/11"><img src="/uploads/user/image/11/hns0012-013.jpg"></a>
                  </div>
                  <div class="content">
                    <div class="content-top">
                      <div class="user-name">
                        <a href="/users/11">ハチワレ</a>
                      </div>
                    <div class="post-content">lkk
                      <div class="post-content__image">
                        <a data-lightbox="#<Image:0x00007f9fe955f150>" rel="lightbox" href="/uploads/image/image_url/102/was0015-049.jpg"><img class="popup-image" src="/uploads/image/image_url/102/was0015-049.jpg"></a>
                      </div>
                    </div>
                    <div class="post-time">2020-07-03 13:43</div>
                  </div>
                    <div class="content-bottom">
                      <div class="favorite-wrapper" id="favorites_buttons_126">
                        <div class="favorite-btn">
                          <a data-remote="true" rel="nofollow" data-method="post" href="/posts/126/favorites"><i class="fa fa-heart fav-add"></i></a>
                        </div>
                      </div>
                      <div class="destoroy-follow-wrapper">
                        <div class="destroy-btn">
                        <a rel="nofollow" data-method="delete" href="/posts/126">削除</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`
    search_list.append(html);
  }


  $(".search-input-post").on("keyup", function() {
    var input = $(".search-input-post").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/posts/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(posts) {
      search_list.empty();
      if (posts.length !== 0) {
        posts.forEach(function(post){
          appendPost(post);
        });
      }
      // else {
      //   appendErrMsgToHTML("一致する投稿がありません");
      // }
    })
  });

  
  $(".search-input-user").on("keyup", function() {
    var input = $(".search-input-user").val();
    console.log(input);
    // $.ajax({
    //   type: 'GET',
    //   url: '/posts/search',
    //   data: { keyword: input },
    //   dataType: 'json'
    // })
    // .done(function(posts) {
    //   search_list.empty();
    //   if (posts.length !== 0) {
    //     posts.forEach(function(post){
    //       appendPost(post;
    //     });
    //   }
    //   else {
    //     appendErrMsgToHTML("一致する投稿がありません");
    //   }
    // })
  });
});