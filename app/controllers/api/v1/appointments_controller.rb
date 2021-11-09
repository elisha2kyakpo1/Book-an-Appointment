# rubocop:disable all
class Api::V1::AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  def create
    appointment_date_and_time = 
    DateTime.parse("#{params[:appointment_date]} #{params[:appointment_time]}")
    @appointment = Appointment.create!(client_id: current_client.id, doctor_id: params[:doctor_id],
                                       appointment_date: params[:appointment_date], appointment_time: params[:appointment_time], appointment_date_and_time: appointment_date_and_time)
    redirect_to root_path, flash: { notice: "Appointment_date, #{@appointment.appointment_date},Appointment_time, #{@appointment.appointment_time},
      Doctor, #{@appointment.doctor.name}" }
  end
end
# rubocop:enable all