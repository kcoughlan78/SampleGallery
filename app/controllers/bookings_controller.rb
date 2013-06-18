class BookingsController < ApplicationController
  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(params[:booking])

    respond_to do |format|
      if @booking.save
        format.html { redirect_to root_url, notice: 'Booking successfully made.' }
      else
        format.html { render action: "new" }
      end
    end
  end

  def index
    @bookings = Booking.order("created_at")
  end

  def edit
    @booking = Booking.find(params[:id])
  end

  def destroy
    @booking = Booking.destroy
  end

  def show
    @booking = Booking.find(params[:id])
  end
end
