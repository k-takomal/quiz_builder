class Question < ApplicationRecord

  belongs_to :user
  belongs_to :genre
  has_many :comments, dependent: :destroy
 
  with_options presence: true do
    validates :title, :question, :correct_ans, :wrong_ans_1, :wrong_ans_2,:genre_id
  end
end
