class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|

      t.timestamps
      t.string :name
      t.string :email
      t.string :phone
      t.text :about
    end
  end
end
