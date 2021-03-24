class UserJoysController < ApplicationController
  layout 'no_side_no_header'
  
  def index
    @user_question = Question.where(user_id: params[:select_id])
    @genre = Genre.find(params[:select_id])
    gon.question = @user_question

  end


end
