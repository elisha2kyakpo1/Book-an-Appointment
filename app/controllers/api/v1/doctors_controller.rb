class Api::V1::DoctorsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @doctors = Doctor.all
        render json: @doctors
    end

    def show
        doctor = Doctor.find(params[:id])
        render  json: doctor
    end

     
  def create
    @Doctor=Doctor.new(doctor_params)
    redirect_to root_path
  end



private
  def doctor_params
    params.permit(:name, :email, :phone, :about, :image)
  end
 
end