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
    doctor = Doctor.new(doctor_params)
 
    If doctor.save
       render json: {status: ‘SUCCESS’, message:’Loaded doctor’, data:doctor),status: :ok
      
    else
        render json: {status: ‘ERROR’, message:’doctor not saved’, data:doctor.errors),status: :unprocessable entry
    end
 
 Private
 
 def doctor_params
     params.permit(:name, :email, :phone, :about)
 end
 
end
