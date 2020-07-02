class FavoritesController < ApplicationController
  # before_filter :require_login
 
  def create
    @post = Post.find(params[:post_id])
    @favorite = current_user.favorites.build(post: @post)
    @favorite.save
      # respond_to do |format|
      #   format.js { flash[:notice] = "お気に入りに登録しました" }
      # end
    # else
    #   redirect_to posts_url , alert: "このツイートはお気に入りに登録できません"
    # end 
  # if @favorite.save
      # notice: "お気に入りに登録しました"
  #   else
  #     redirect_to posts_url , alert: "このツイートはお気に入りに登録できません"
  #  end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @favorite = current_user.favorites.find_by!(post_id: params[:post_id])
    @favorite.destroy
    # redirect_back(fallback_location: root_path ,notice: "お気に入りを解除しました")
  end

end
