class AddReferencesToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_reference :appointments, :client, null: false, foreign_key: true
  end
end
