class SelectsController < ApplicationController

  def index
    @question = Question.all
    @genres = Genre.all
    
  end

end
