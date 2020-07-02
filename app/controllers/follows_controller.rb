class FollowsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    @user.inverse_follows.create(follower: current_user)
    # if @user.inverse_follows.create(follower: current_user)
    #   redirect_back(fallback_location: root_path ,notice: "フォローしました")
    # else
    #   redirect_back(fallback_location: root_path ,notice: "フォローできません")
    # end
  end

  def destroy
    @user = User.find(params[:user_id])
    follow = @user.inverse_follows.find_by(follower: current_user.id)
    follow.destroy
    # redirect_back(fallback_location: root_path ,notice: "フォローを解除しました")
  end
end
