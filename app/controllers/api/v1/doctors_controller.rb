class Api::V1::DoctorsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @doctors = Doctor.all
    render json: @doctors
  end

  def show
    doctor = Doctor.find(params[:id])
    render json: doctor
  end

  def create
    image = Cloudinary::Uploader.upload(params[:image])
    @doctor = Doctor.create!(name: params[:name], email: params[:email], phone: params[:phone], about: params[:about],
                             image: image['url'])
  end
end
