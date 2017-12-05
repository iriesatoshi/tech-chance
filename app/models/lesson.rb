class Lesson < ApplicationRecord
  mount_uploader :image, ImagesUploader
  belongs_to :user
  has_many :products, dependent: :destroy
  has_many :my_lessons, dependent: :destroy
end
