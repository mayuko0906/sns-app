class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @name = current_user.name
    @posts = current_user.posts.order("created_at DESC")
    @post = Post.new
  end


  def edit
    @user = current_user
  end
  
  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end


  def favorites
    @user = User.find(params[:id])
    @post = Post.new

  end



  def follows
    @user = User.find(params[:id])
    @post = Post.new

  end

  def followers
    @user = User.find(params[:id])
    @post = Post.new

  end

  def search
    redirect_to root_path if params[:keyword] == ""
  
    split_keyword = params[:keyword].split(/[[:blank:]]+/)
  
    @users = [] 
    split_keyword.each do |keyword|
      next if keyword == "" 
      @users +=User.where('name LIKE(?)', "%#{keyword}%")
    end 
    @users.uniq! 
    #重複した商品を削除する

    respond_to do |format|
      format.html
      format.json
    end

    @post = Post.new



  end
  
  private
  def user_params
    params.require(:user).permit(:name, :email, :bio, :image)
  end
end
