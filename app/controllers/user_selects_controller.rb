class UserSelectsController < ApplicationController

  layout 'on_header_no_login' 

  def index
    @question = Question.order("genre_id")
    @user = User.order_by_users.order("nickname")
  end
end
