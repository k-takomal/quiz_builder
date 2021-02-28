class UsersController < ApplicationController
  def show
    @question = Question.all
    @user =User.find(params[:id])
  end

end
