class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :image
      t.text :description
      t.date :dt_booked_from
      t.date :dt_booked_to
      t.integer :price
      t.references :category, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
