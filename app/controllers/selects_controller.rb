class SelectsController < ApplicationController
  layout 'on_header_no_login' 
  def index
    @question = Question.order("genre_id")
    
    @genres = Genre.order("name")
    # @genres = Genre.order("name").order("@question")
  
  end

end
