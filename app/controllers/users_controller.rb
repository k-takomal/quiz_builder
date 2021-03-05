class UsersController < ApplicationController
  def show
    @question = Question.all
    @user =User.find(params[:id])
    @user_question = @question.where(user_id: @user.id).order("created_at DESC")
  end

end
