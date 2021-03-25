class UserJoysController < ApplicationController
  layout 'no_side_no_header'
  
  def index
    @user_question = Question.where(user_id: params[:user_select_id])
    
    gon.question = @user_question

  end


end
