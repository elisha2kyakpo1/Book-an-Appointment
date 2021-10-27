class PagesController < ApplicationController
  skip_before_action :authenticate_client!, only: :home
  def home
    redirect_to booking_path if client_signed_in?
  end

  def booking; end
end
