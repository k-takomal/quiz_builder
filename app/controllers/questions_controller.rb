class QuestionsController < ApplicationController
  layout 'application' ,only: :index
  layout 'on_header_no_login' ,only: [:new,:edit]
  layout 'no_header_on_timer' ,only: :create
  before_action :authenticate_user!, only:[:new, :edit]
  

  def index
    @genre = Genre.order("name")
    @question = Question.all
  end


  def new
    @question_comment = QuestionComment.new
    @genre = Genre.order("name")
  end


  def create
    @genre = Genre.order("name")
    @question_comment = QuestionComment.new(question_params)
    if @question_comment.valid?
      @question_comment.save
    else
      render :new
    end
  end


  def show
    @genre = Genre.find(params[:id])
    @question = Question.where(genre_id: @genre.id)
    @questions = @question.order("created_at DESC")
  end


  def edit
    @genre = Genre.order("name")
    @question = Question.find(params[:id])
    
  end
  

  def update
    @genre = Genre.order("name")
    @question = Question.find(params[:id])
    Comment.create(comment_params)
    if @question.update(update_params)
    redirect_to question_comments_path(params[:id])
    else
      render :edit
    end
  end


def destroy
  question = Question.find(params[:id])
  question.destroy
  redirect_to user_path(current_user.id)
end


private

  def question_params
    params.require(:question_comment).permit(:title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2, :genre_id, :text ).merge(user_id: current_user.id)
  end


  def comment_params
    params.require(:question).permit(:text).merge(user_id: current_user.id, question_id: params[:id])
  end


  def update_params
    params.require(:question).permit(:title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2, :genre_id )
  end
end
