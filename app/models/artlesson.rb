class Artlesson < ActiveRecord::Base
  attr_accessible :description, :no_of_weeks, :places, :price, :start_date, :teacher, :title
end
