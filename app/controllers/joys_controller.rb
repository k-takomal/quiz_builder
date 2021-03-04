class JoysController < ApplicationController
  layout 'no_side_no_header'
def index
  # binding.pry
@question = Question.where(genre_id: params[:select_id])
@genre = Genre.find(params[:select_id])

gon.question = @question

end

end
