class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :appointment_date
      t.string :appointment_time
      t.datetime :appointment_date_and_time
      t.references :client, index: true, foreign_key: true
      t.references :doctor, index: true, foreign_key: true
      t.timestamps
    end
  end
end
