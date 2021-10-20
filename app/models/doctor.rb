class Doctor < ApplicationRecord
  has_many :clients, through: :apointments
end
