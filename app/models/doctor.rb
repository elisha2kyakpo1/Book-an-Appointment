class Doctor < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments, dependent: :destroy
  validates :name,:phone, presence: true, uniqueness: true, length: { minimum: 1, maximum: 50 }
  validates :phone, format: { with: /\A\d+\z/, message: "Integer only. No sign allowed." }
  validates :email, presence: true, uniqueness: true
end
