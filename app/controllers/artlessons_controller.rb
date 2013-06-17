class ArtlessonsController < ApplicationController
  def index
    @artlessons = Artlesson.order("title")
  end

  def new
    @artlesson = Artlesson.new
  end

  def edit
    @artlesson = Artlesson.find(params[:id])
  end
end
