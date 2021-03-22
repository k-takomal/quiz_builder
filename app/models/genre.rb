class Genre < ApplicationRecord
  # validates :name, presence: true, uniqueness: true
  validates :name, presence:{message: "ジャンル名を書いてください"}
  validates :name, uniqueness:{message: "すでにそのジャンルはあります"}
  has_many :questions

  # ジャンルの並びを問題数の多い順にする
  def self.order_by_genres
    self.select('genres.*','count(questions.id) AS questions').left_joins(:questions).group('genres.id').order('questions DESC')
  end
  # ジャンルの並びを問題数の多い順にする

end
