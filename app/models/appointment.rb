class Appointment < ApplicationRecord
  validates_uniqueness_of :appointment_date_and_time, scope: :client_id
  validates_uniqueness_of :appointment_date_and_time, scope: :doctor_id
  belongs_to :client
  belongs_to :doctor
end
