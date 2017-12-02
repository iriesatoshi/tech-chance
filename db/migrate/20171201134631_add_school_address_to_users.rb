class AddSchoolAddressToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :school_address, :integer
  end
end
