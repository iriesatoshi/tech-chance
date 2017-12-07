class AddMyLessonSumToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :my_lesson_sum, :integer, default:0
  end
end
