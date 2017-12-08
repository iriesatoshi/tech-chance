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
  validates :student_address_or_school_address, absence: true
  validates :student_address1_or_school_address1, presence: true

  private
    def student_address_or_school_address
      student_address.presence and school_address.presence
    end

    def student_address1_or_school_address1
      student_address.presence or school_address.presence
    end
end
