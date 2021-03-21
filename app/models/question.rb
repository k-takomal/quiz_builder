class Question < ApplicationRecord

  belongs_to :user
  belongs_to :genre
  has_many :comments, dependent: :destroy
 
  # with_options presence: true do
  #   validates :genre_id,:title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2
  # end

  validates :genre_id, presence:{message: "ジャンルを選択してください"}
  validates :title, presence:{message: "タイトルを書いてください"}
  validates :correct_ans, presence:{message: "正解を書いてください"}
  validates :wrong_ans_1, presence:{message: "不正解を２つ書いてください"}
  validates :wrong_ans_2, presence:{message: "不正解を２つ書いてください"}

end
