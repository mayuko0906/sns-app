// $(function() {
//   var search_list = $(".posts");

//   function appendTweet(post) {
//     var html = `<div class="content_post" style="background-image: url(${tweet.image});">
//                   <div class="more">
//                     <span><img src="/assets/arrow_top.png"></span>
//                     <ul class="more_list">
//                       <li>
//                         <a href="/tweets/${tweet.id}" data-method="get" >詳細</a>
//                       </li>
//                       ${current_user}
//                     </ul>
//                   </div>
//                   <p>${tweet.text}</p><br>
//                   <span class="name">
//                     <a href="/users/${tweet.user_id}">
//                       <span>投稿者</span>${tweet.nickname}
//                     </a>
//                   </span>
//                 </div>`
//     search_list.append(html);
//   }


// <div class="post">
//   <div class="user-icon">
//     <a href="/users/4"><img src="/uploads/user/image/4/48E9EF5E-A2FF-4E79-B03C-829A4263913F.jpeg"></a>
//   </div>
//   <div class="content">
//     <div class="content-top">
//       <div class="user-name">
//         <a href="/users/4">mayukoiino</a>
//       </div>
//       <div class="post-content">
//         aaaa
//         <img src="/uploads/image/image_url/19/F0D99E9F-86C5-4779-B620-91A78A648D6E.jpeg">
//       </div>
//       <div class="post-time">
//         2020-05-30 15:20
//       </div>
//     </div>
//     <div class="content-bottom">
//       <div class="favorite-wrapper">
//         <div class="favorite-btn"></div>
//         <a rel="nofollow" data-method="post" href="/posts/67/favorites"><i class="fa fa-heart fav-add"></i></a>
//       </div>
//       <div class="destoroy-follow-wrapper">
//         <div class="destroy-btn">
//           <a rel="nofollow" data-method="delete" href="/posts/67">削除</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//   $(".search-input").on("keyup", function() {
//     var input = $(".search-input").val();
//     $.ajax({
//       type: 'GET',
//       url: '/posts/search',
//       data: { keyword: input },
//       dataType: 'json'
//     })
//     .done(function(posts) {
//       search_list.empty();
//       if (posts.length !== 0) {
//         posts.forEach(function(post){
//           appendPost(post;
//         });
//       }
//       else {
//         appendErrMsgToHTML("一致する投稿がありません");
//       }
//     })
//   });
// });