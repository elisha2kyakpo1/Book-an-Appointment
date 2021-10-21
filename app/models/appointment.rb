class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :clients
  scope :past, -> { where('date < ?', Date.today) }
  scope :upcoming, -> { where('date >= ?', Date.today) }
  validates :name, presence: true
  validates :hospital, presence: true
  validates :appointment_date, presence: true
end
