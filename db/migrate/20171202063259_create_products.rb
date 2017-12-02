class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.text :body
      t.string :pdf
      t.string :title, null: false
      t.references :lesson, null: false, foreign_key: true
      t.timestamps
    end
  end
end
