class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :doctor
end
