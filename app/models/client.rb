class Client < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :apointments
end
