class AddingDefaulttoBooleans < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :private
    remove_column :channels, :is_dm?
    add_column :servers, :private, :boolean, default: false, null: false
    add_column :channels, :is_dm?, :boolean, default: false, null: false
  end
end
