class Lesson < ApplicationRecord
  mount_uploader :image, ImagesUploader
  belongs_to :user
  has_many :products
end
