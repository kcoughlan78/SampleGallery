class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.string :firstname
      t.string :surname
      t.string :email
      t.text :address
      t.string :phone_no
      t.string :payment_type

      t.timestamps
    end
  end
end
