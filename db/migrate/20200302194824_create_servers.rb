class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :invite, null: false
      t.integer :owner_id, null: false
      t.boolean :private, null: false

      t.timestamps
    end
    add_index :servers, :owner_id
    add_index :servers, :invite, unique: true
  end
end
