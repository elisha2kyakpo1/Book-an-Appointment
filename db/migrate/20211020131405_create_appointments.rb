class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|

      t.timestamps
      t.date :appointment_date
      t.string :hospital
      t.references :doctor, index: true, foreign_key: true
      t.references :client, index: true, foreign_key: true
    end
  end
end
