class Doctor < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments, dependent: :destroy
  validates :name, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
end
