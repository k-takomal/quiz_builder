class JoysController < ApplicationController
  layout 'no_side_no_header'


  def index
    @question = Question.where(genre_id: params[:select_id])
    @genre = Genre.all
    gon.question = @question
    gon.genre = @genre
    
  end

end
