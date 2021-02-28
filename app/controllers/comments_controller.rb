class CommentsController < ApplicationController
  layout 'on_header_no_login',only: [:edit]
  before_action :authenticate_user!, only:[:edit]
  
  def index
    @question = Question.find(params[:question_id])
    @user = User.find(@question.user_id)
    @genre = Genre.find(@question.genre_id)
    @comment_new = Comment.new
    @comments = Comment.where(question_id: params[:question_id])
    
  end
  
  def create
    @comment = Comment.new(comment_params)
    if @comment.valid?
      @comment.save
    # binding.pry
      redirect_to question_comments_path(params[:question_id])
    else
      render action: :index
    end
  end


  def edit
    @comment = Comment.find(params[:id])
    @question = Question.find(@comment.question_id)
  end


  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      redirect_to question_comments_path(params[:question_id])
    else
      render :edit
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to question_comments_path(params[:question_id])
  end

private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, question_id: params[:question_id])
  
  end
end
