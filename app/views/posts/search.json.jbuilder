json.array! @posts do |post|
  json.id post.id
  json.post post.post
  json.images post.images
  json.user_id post.user_id
  json.user_sign_in current_user
end