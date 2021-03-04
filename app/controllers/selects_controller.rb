class SelectsController < ApplicationController
  layout 'on_header_no_login' 
  def index
    @question = Question.all
    @genres = Genre.order("name")
  
  end

end
