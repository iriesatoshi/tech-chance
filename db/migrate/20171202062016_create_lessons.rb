class CreateLessons < ActiveRecord::Migration[5.0]
  def change
    create_table :lessons do |t|
      t.text :body, null: false
      t.string :image
      t.string :title, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
