json.array! @users do |user|
  json.id user.id
  json.name user.name
  # json.created_at post.created_at
  # json.images post.images
  # json.user_id post.user_id
  # json.name post.user.name
  # json.user_sign_in current_user
end