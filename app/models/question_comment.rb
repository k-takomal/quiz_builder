class QuestionComment
  include ActiveModel::Model
  attr_accessor :title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2, :genre_id, :user_id, :text,:question_id

  # with_options presence: true do
  #   validates :genre_id,:title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2
  # end
  validates :genre_id, presence:{message: "ジャンルを選択してください"}
  validates :title, presence:{message: "タイトルを書いてください"}
  validates :correct_ans, presence:{message: "正解を書いてください"}
  validates :wrong_ans_1, presence:{message: "不正解を２つ書いてください"}
  validates :wrong_ans_2, presence:{message: "不正解を２つ書いてください"}

  def save
    questions = Question.create(title: title, question: question, correct_ans: correct_ans, wrong_ans_1: wrong_ans_1, wrong_ans_2: wrong_ans_2, genre_id: genre_id, user_id: user_id)
    Comment.create(text: text, user_id: user_id, question_id: questions.id)
  end

  def update
    questions = Question.update(title: title, question: question, correct_ans: correct_ans, wrong_ans_1: wrong_ans_1, wrong_ans_2: wrong_ans_2, genre_id: genre_id, user_id: user_id)
    Comment.create(text: text, user_id: user_id, question_id: questions.id)
  end

end
