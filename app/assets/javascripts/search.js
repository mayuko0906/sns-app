// $(function() {
  // var search_list = $(".users");

  // function appendPost(post) {
  //   var html = `<div class="post">
  //                 <div class="user-icon">
  //                   <a href="/users/${post.user_id}">
  //                     <img src="#">
  //                   </a>
  //                 </div>
  //                 <div class="content">
  //                   <div class="content-top">
  //                     <div class="user-name">
  //                       <a href="/users/${post.user_id}">${post.name}</a>
  //                     </div>
  //                   <div class="post-content">${post.post}
  //                     <div class="post-content__image">
  //                       <a data-lightbox="#<Image:0x00007f9fe955f150>" rel="lightbox" href="#"><img class="popup-image" src="#"></a>
  //                     </div>
  //                   </div>
  //                   <div class="post-time"> ${post.created_at}</div>
  //                 </div>
  //                   <div class="content-bottom">
  //                     <div class="favorite-wrapper" id="favorites_buttons_${post.id}">
  //                       <div class="favorite-btn">
  //                         <a data-remote="true" rel="nofollow" data-method="post" href="/posts/${post.id}/favorites"><i class="fa fa-heart fav-add"></i></a>
  //                       </div>
  //                     </div>
  //                     <div class="destoroy-follow-wrapper">
  //                       <div class="destroy-btn">
  //                       <a rel="nofollow" data-method="delete" href="/posts/${post.id}">削除</a>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>`
  //   search_list.append(html);
  // }


  // $(".search-input-post").on("keyup", function() {
  //   var input = $(".search-input-post").val();
  //   console.log(input);
  //   $.ajax({
  //     type: 'GET',
  //     url: '/posts/search',
  //     data: { keyword: input },
  //     dataType: 'json'
  //   })
  //   .done(function(posts) {
  //     search_list.empty();
  //     if (posts.length !== 0) {
  //       posts.forEach(function(post){
  //         appendPost(post);
  //       });
  //     }
  //     else {
  //       appendErrMsgToHTML("一致する投稿がありません");
  //     }
  //   })
  // });


  // $(".search-input-user").on("keyup", function() {
  //   var input = $(".search-input-user").val();
  //   console.log(input);
  //   $.ajax({
  //     type: 'GET',
  //     url: '/users/search',
  //     data: { keyword: input },
  //     dataType: 'json'
  //   })
  //   .done(function(users) {
      // console.log("ssss");
      // search_list.empty();
      // if (posts.length !== 0) {
      //   posts.forEach(function(post){
      //     appendPost(post);
      //   });
      // }
      // else {
      //   appendErrMsgToHTML("一致する投稿がありません");
      // }
//     })
//   });
// });