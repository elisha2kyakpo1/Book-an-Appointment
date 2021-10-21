class Doctor < ApplicationRecord
  has_many :clients, through: :appointments, dependent: :destroy
end
