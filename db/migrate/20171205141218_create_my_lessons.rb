class CreateMyLessons < ActiveRecord::Migration[5.0]
  def change
    create_table :my_lessons do |t|
      t.references :user, null:false, foreign_key: true
      t.references :lesson, null:false, foreign_key: true
      t.timestamps
    end
  end
end
