class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :is_dm?, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :channels, [:server_id, :name], unique: true
  end
end
