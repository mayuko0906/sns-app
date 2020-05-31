class ChangeDataImageurlToImage < ActiveRecord::Migration[5.2]
  def change
    change_column :images, :image_url, :string

  end
end
