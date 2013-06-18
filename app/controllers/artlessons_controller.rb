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
    @artlesson = Artlesson.new(params[:artlesson])

      respond_to do |format|
        if @artlesson.save
          format.html { redirect_to root_url, notice: 'Lesson Created.' }
        else
          format.html { render action: "new" }
        end
      end
  end


    def show
      @artlesson = Artlesson.find(params[:id])
    end

end
