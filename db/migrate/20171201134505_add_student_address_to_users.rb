class AddStudentAddressToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :student_address, :integer
  end
end
