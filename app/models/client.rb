class Client < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :apointments, foreign_key: :doctor_id, class_name: 'User'
end
