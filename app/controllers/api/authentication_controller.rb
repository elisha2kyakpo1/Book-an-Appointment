module Api
  module V1
    class AuthenticationController < ActionController::Base
      # before_action :check_basic_auth
      skip_before_action :verify_authenticity_token
      protect_from_forgery with: :null_session

      private

      def check_basic_auth
        unless request.authorization.present?
          head :unauthorized
          return
        end
        authenticate_with_http_basic do |email, password|
          client = Client.find_by(email: email.downcase)
          if client&.authenticate(password)
            @current_ = client
          else
            head :unauthorized
          end
        end
      end

      attr_reader :current_user
    end
  end
end