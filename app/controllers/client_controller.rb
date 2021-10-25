class ClientController < ApplicationController
  before_action :authenticate_client!
  def index
  end

  def show
  end
end
