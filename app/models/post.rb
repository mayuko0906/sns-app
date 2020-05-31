class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy

  has_many :images ,dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true

  validates :post, presence: true

  def favorited_by? user
    favorites.where(user_id: user.id).exists?
  end

  # def self.search(search)
  #   return Post.all unless search

  #   split_keyword = search.split(/[[:blank:]]+/)
    
  #   split_keyword.each do |search|
  #     next if search == "" 
  #     Post.where('post LIKE(?)', "%#{search}%")
  #   end 
    
  # end



  default_scope { order(created_at: :desc) }

end
