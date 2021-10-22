class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :clients
  scope :past, -> { where('date < ?', Date.today) }
  scope :upcoming, -> { where('date >= ?', Date.today) }
  validates :hospital, presence: true
  validates :appointment_date, presence: true
end
