class GenresController < ApplicationController
  layout 'on_header_no_login'
  def new
    @genre = Genre.new
    @genres = Genre.order("name")
    @questions = Question.all
    @genre_question = Genre.joins(:questions)

  end

  def create
    @genre =  Genre.new(genre_params)
    if @genre.save
      redirect_to new_question_path
    else 
      render :new
    end
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end
end
