class Client < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :apointments
  validates :name, presence: true
  validates :email, presence: :true, uniqueness: :true
end
