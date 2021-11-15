class Doctor < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments, dependent: :destroy
  validates :name, :phone, :email, presence: true
  validates :phone, :email, uniqueness: true
  validates :phone, format: { with: /\A\d+\z/, message: 'Integer only. No sign allowed.' }
  validates :email, presence: true, uniqueness: true
end
