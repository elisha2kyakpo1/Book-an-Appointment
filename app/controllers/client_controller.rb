<<<<<<< HEAD
class ClientController < ApplicationController
  before_action :authenticate_client!
  def index
    @clients = Client.all
    render json: @clients
  end

  def show; end
end
=======
class ClientController < ApplicationController
  before_action :authenticate_client!
  def index
    # @clients = Client.all
    # render json: @clients
  end

  def show; end
end
>>>>>>> e327e181373a447b1c6a3774ea416daed0cf11b3
