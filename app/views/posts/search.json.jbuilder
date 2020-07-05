json.array! @posts do |post|
  json.id post.id
  json.post post.post
  json.created_at post.created_at
  json.images post.images
  json.user_id post.user_id
  json.name post.user.name
  json.user_sign_in current_user
end