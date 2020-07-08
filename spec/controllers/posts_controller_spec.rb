require 'rails_helper'

describe PostsController do
  describe 'GET #index' do
  it "@postsに正しい値が入っていること" do
    posts = create_list(:post, 3) 
    get :index
    expect(assigns(:posts)).to match(posts)

  end

  it "index.html.erbに遷移すること" do
  end
end

end