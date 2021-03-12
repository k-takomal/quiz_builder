class QuestionsController < ApplicationController
  layout 'on_header_no_login' ,only: [:new,:edit]
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
    @question_comment = QuestionComment.new(question_params)
    if @question_comment.valid?
      @question_comment.save
      redirect_to root_path
    else
      render action: :new
    end
  end


  def show
    
    @genre = Genre.find(params[:id])
    @question = Question.where(genre_id: @genre.id)
    @questions = @question.order("title")
    # @user = User.find(@question.user_id)
  end


  def edit
    @question = Question.find(params[:id])
    
  end
  

  def update
    @question = Question.find(params[:id])
    Comment.create(comment_params)
    if @question.update(update_params)
    redirect_to question_comments_path(params[:id])
    else
      # @question = Question.find(params[:id])
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
