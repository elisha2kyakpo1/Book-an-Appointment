class Api::V1::AppointmentsController < ApplicationController
    def index
        @appointments =  Appointment.where(client_id:current_client.id)
        render json:  @appointments
      end
end






