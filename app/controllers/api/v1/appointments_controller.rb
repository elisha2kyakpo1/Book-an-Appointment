class Api::V1::AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
    def index
        @appointments =  Appointment.where(client_id:current_client.id)
        render json:  @appointments
      end

    def create
      appointment_time = DateTime.parse("#{params[:appointment_date]} #{params[:appointment_time]}")
      @appointment = Appointment.create!(client_id:current_client.id,doctor_id:params[:doctor_id],appointment_date:appointment_time)
    end  
end






