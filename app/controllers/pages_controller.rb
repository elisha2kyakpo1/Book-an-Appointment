class PagesController < ApplicationController
    skip_before_action :authenticate_client!, only: :home
    def home
        if client_signed_in?
            redirect_to booking_path
      
        end
    end    
    def booking
    end    
end
