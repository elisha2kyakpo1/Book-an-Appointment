class Doctor < ApplicationRecord
  has_many :clients,
            through: :appointments,
            dependent: :destroy,
            class_name: 'User'
end
