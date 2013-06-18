class Booking < ActiveRecord::Base
  attr_accessible :address, :email, :firstname, :payment_type, :phone_no, :surname

  belongs_to :artlesson

  validates :firstname, :surname, :address, presence: true
  validates :email,
            presence: true,
            :uniqueness => true,
            :length => {:within => 5..50},
            :format => {:with => /^[^@][\w.-]+@[\w.-]+[.][a-z]{2,4}$/i}
  PAYMENT_TYPES = [ "Visa", "Mastercard", "Maestro" ]
  validates :name, :address, :email, presence: true
  validates :payment_type, inclusion: PAYMENT_TYPES

end
