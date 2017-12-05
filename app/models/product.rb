class Product < ApplicationRecord
  mount_uploader :pdf, ImagesUploader
  belongs_to :lesson
end
