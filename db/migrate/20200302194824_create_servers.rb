class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name
      t.string :invite
      t.integer :owner_id
      t.boolean :private

      t.timestamps
    end
  end
end
