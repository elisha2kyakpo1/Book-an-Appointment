class Doctor < ApplicationRecord
  has_many :clients, through: :appointments, dependent: :destroy
  validates :email, presence: :true, uniqueness: :true
end
