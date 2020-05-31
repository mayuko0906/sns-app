class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user, :images).order("created_at DESC")
    @post = Post.new
    @post.images.new


    @images = Post.find(48).images
    # @apost = Post.find(47)
    # @image = @posts.images
    @apost = @posts.find(48)
  end

  def timeline
    @posts = Post.eager_load(user: :inverse_follows).where(follows: { follower_id: current_user.id })
    @post  = Post.new
  end

  def new
    @post = Post.new
    @post.images.new
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

  # def search
  #   @posts = Post.search(params[:keyword])
  #   @posts.uniq! 
  #   @post = Post.new
  # end

  def search
    redirect_to root_path if params[:keyword] == ""
  
    split_keyword = params[:keyword].split(/[[:blank:]]+/)
  
    @posts = [] 
    split_keyword.each do |keyword|
      next if keyword == "" 
      @posts += Post.where('post LIKE(?)', "%#{keyword}%")
    end 
    @posts.uniq! 
    #重複した商品を削除する

    @post = Post.new

    respond_to do |format|
      format.html
      format.json
    end


  end
  



  private
  def post_params
    params.require(:post).permit(:post, images_attributes: [:image_url]).merge(user_id: current_user.id)
  end
end
