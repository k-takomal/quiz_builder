class ApplicationController < ActionController::Base
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
end
