class QuestionComment
  include ActiveModel::Model
  attr_accessor :title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2, :genre_id, :user_id, :text,:question_id

  with_options presence: true do
    validates :title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2,:genre_id
  end

  def save
     
    questions = Question.create(title: title, question: question, correct_ans: correct_ans, wrong_ans_1: wrong_ans_1, wrong_ans_2: wrong_ans_2, genre_id: genre_id, user_id: user_id)

    Comment.create(text: text, user_id: user_id, question_id: questions.id)
  end

  def update
     
    questions = Question.update(title: title, question: question, correct_ans: correct_ans, wrong_ans_1: wrong_ans_1, wrong_ans_2: wrong_ans_2, genre_id: genre_id, user_id: user_id)

    Comment.create(text: text, user_id: user_id, question_id: questions.id)
  end

end
