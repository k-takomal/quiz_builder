class UserJoysController < ApplicationController
  layout 'no_side_no_header'
  
  def index
    
    @user_question = Question.where(user_id: params[:user_select_id])

    @user_genre = Genre.all
    # @user_genre = Genre.joins(:questions).select("genres.*,questions.*")


    gon.question = @user_question
    gon.genre = @user_genre
    
  end

  

end
