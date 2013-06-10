class CreateArtlessons < ActiveRecord::Migration
  def change
    create_table :artlessons do |t|
      t.string :title
      t.text :description
      t.string :teacher
      t.integer :places
      t.integer :price
      t.datetime :start_date
      t.integer :no_of_weeks

      t.timestamps
    end
  end
end
