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

  def create
    @artlesson = Artlesson.create(params[:artlesson])

      respond_to do |format|
        if @artlesson.save
          format.html { redirect_to root_url, notice: 'Complaint successfully sent.' }
        else
          format.html { render action: "new" }
        end
      end
  end
end
