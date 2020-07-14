class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :name, presence: true, uniqueness: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favorites, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :favorite_posts, through: :favorites, source: :post

  has_many :follows, foreign_key: :follower_id
  has_many :inverse_followers, through: :follows
  has_many :inverse_follows, foreign_key: :inverse_follower_id, class_name: "Follow"
  has_many :followers, through: :inverse_follows


  def favorited_by? user
    favorites.where(user_id: user.id).exists?
  end

  def followed_by? user
    inverse_follows.where(follower_id: user.id).exists?
  end

  mount_uploader :image, ImageUploader

end