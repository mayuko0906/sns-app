class PostsController < ApplicationController
  before_action :set_post

  def index
    @posts = Post.includes(:user, :images).order("created_at DESC")
  end

  def new
  end

  def timeline
    @posts = Post.eager_load(user: :inverse_follows).where(follows: { follower_id: current_user.id })
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path , notice: '投稿しました'
    else
      redirect_back(fallback_location: root_path , alert: "投稿できません")
    end
    @post.user = current_user
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_back(fallback_location: root_path ,alert: "投稿を削除しました")
  end

  def search
    redirect_to root_path if params[:keyword] == ""
    split_keyword = params[:keyword].split(/[[:blank:]]+/)
    @posts = []
    split_keyword.each do |keyword|
      next if keyword == ""
      @posts += Post.where('post LIKE(?)', "%#{keyword}%")
    end
    @posts.uniq!
    #重複した投稿を削除する
    respond_to do |format|
      format.html
      format.json
    end
  end

  private
  def post_params
    params.require(:post).permit(:post, images_attributes: [:image_url, :_destroy, :id]).merge(user_id: current_user.id)
  end

  def set_post
    @post = Post.new
    @post.images.new
  end
end
