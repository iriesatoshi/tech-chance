class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :image, ImagesUploader
  validates :name, presence: true
  validates :email, uniqueness: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :lessons, through: :my_lessons, dependent: :destroy
  has_many :my_lessons, dependent: :destroy
end
