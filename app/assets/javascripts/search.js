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
                    <a href="/users/${post.user_id}">
                      <img src="#">
                    </a>
                  </div>
                  <div class="content">
                    <div class="content-top">
                      <div class="user-name">
                        <a href="/users/${post.user_id}">${post.name}</a>
                      </div>
                    <div class="post-content">${post.post}
                      <div class="post-content__image">
                        <a data-lightbox="#<Image:0x00007f9fe955f150>" rel="lightbox" href="#"><img class="popup-image" src="#"></a>
                      </div>
                    </div>
                    <div class="post-time"> ${post.created_at}</div>
                  </div>
                    <div class="content-bottom">
                      <div class="favorite-wrapper" id="favorites_buttons_${post.id}">
                        <div class="favorite-btn">
                          <a data-remote="true" rel="nofollow" data-method="post" href="/posts/${post.id}/favorites"><i class="fa fa-heart fav-add"></i></a>
                        </div>
                      </div>
                      <div class="destoroy-follow-wrapper">
                        <div class="destroy-btn">
                        <a rel="nofollow" data-method="delete" href="/posts/${post.id}">削除</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`
    search_list.append(html);
  }



<div class="post">
  <div class="user-icon">
    <a href="/users/10">
      <div class="no-image">
        no image
      </div>
    </a>
  </div>
  <div class="content">
    <div class="content-top">
      <div class="user-name">
        <a href="/users/10">みーこ</a>
      </div>
      <div class="post-content">
        こんばんは
        <div class="post-content__image"></div>
      </div>
      <div class="post-time">2020-06-01 17:25</div>
    </div>
    <div class="content-bottom">
      <div class="favorite-wrapper" id="favorites_buttons_85">
        <div class="favorite-btn">
          <a data-remote="true" rel="nofollow" data-method="post" href="/posts/85/favorites"><i class="fa fa-heart fav-add"></i></a>
          <div class="favorite-count">1</div>
        </div>
      </div>
      <div class="destoroy-follow-wrapper">
        <div class="follow-btn follows_buttons_10">
          <a data-remote="true" rel="nofollow" data-method="post" href="/users/10/follows">フォローする</a>
        </div>
      </div>
    </div>
  </div>
</div>


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
      else {
        appendErrMsgToHTML("一致する投稿がありません");
      }
    })
  });
});