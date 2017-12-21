class AddFreeToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :free, :string
  end
end
