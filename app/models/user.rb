class User < ApplicationRecord
  has_many :doctor_appointments, foreign_key: :client_id,
            through: :doctor,
            dependent: :destroy,
            class_name: 'Appointment'
  validates :name, :email, presence: true, uniqueness: true
end
