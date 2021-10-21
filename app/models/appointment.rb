class Appointment < ApplicationRecord
  belongs_to :doctor, class_name: 'User'

  belongs_to :clients, class_name: 'User'
  has_many :client_appointments, dependent: :destroy
  has_many :doctor_client_appointments, through: :client_appointments, source: :clientele
  scope :past, -> { where('date < ?', Date.today) }
  scope :upcoming, -> { where('date >= ?', Date.today) }
  validates :name, presence: true
  validates :hospital, presence: true
  validates :appointment_date, presence: true
end
