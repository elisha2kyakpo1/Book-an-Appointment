class Client < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :appointments
  has_many :doctors, through: :appointments, dependent: :destroy
  validates :email, presence: true, uniqueness: true, length: { minimum: 3, maximum: 40 }
  validates :encrypted_password, presence: true
end
