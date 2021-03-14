class ApplicationController < ActionController::Base
  before_action :basic_auth
  before_action :configtre_permitted_parameters, if: :devise_controller?
  before_action :days_data

  
  private

  def configtre_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,keys:[:nickname])
  end

  def days_data
    @month = Date.current.strftime('%m')
    @day = Date.current.strftime('%d')
    @weeks = ["日","月","火","水","木","金","土" ]
    @week = @weeks[Date.today.wday]
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |username,password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
    end
  end
end
