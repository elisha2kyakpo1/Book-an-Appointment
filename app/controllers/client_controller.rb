class ClientController < ApplicationController
  before_action :authenticate_client!
  def index
    # @clients = Client.all
    # render json: @clients
  end

  def show
  end
end