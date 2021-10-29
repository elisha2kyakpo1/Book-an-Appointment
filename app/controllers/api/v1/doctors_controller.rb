class Api::V1::DoctorsController < ApplicationController
    def index
        @doctors = Doctor.all
        render json: @doctors
    end

    def show
        doctor = Doctor.find(params[:id])
        render  json: doctor
    end

     
  def create
   @doctor = Doctor.new
   @doctor = Doctor.create(doctor_params)
end
private
  def doctor_params
    params.permit(:name, :email, :phone, :about, :image)
  end
 
end
