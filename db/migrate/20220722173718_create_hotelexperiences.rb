class CreateHotelexperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :hotelexperiences do |t|
      t.references :hotel, null: false, foreign_key: true
      t.references :experience, null: false, foreign_key: true

      t.timestamps
    end
  end
end
