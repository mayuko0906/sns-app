class Image < ApplicationRecord
  mount_uploader :image_url, ImageUploader
  belongs_to :post

  validates :post_id, presence: true

end
