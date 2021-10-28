class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :appointment_date
      t.references :client, index: true, foreign_key: true
      t.references :doctor, index: true, foreign_key: true
      t.timestamps
    end
  end
end
