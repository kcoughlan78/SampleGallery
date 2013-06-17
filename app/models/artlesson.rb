class Artlesson < ActiveRecord::Base
  attr_accessible :description, :no_of_weeks, :places, :price, :start_date, :teacher, :title

  validates :description, :no_of_weeks, :price, :teacher, :title, :places, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}
  validates :no_of_weeks, :places, numericality: {greater_than_or_equal_to: 1}

end
