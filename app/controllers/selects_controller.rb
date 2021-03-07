class SelectsController < ApplicationController
  layout 'on_header_no_login' 
  def index
    @question = Question.order("genre_id")
    
    @genres = Genre.order_by_genres.order("name")
    # @genres = Genre.order("name")
  
  end

end
