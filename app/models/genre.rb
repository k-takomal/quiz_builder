class Genre < ApplicationRecord

  has_many :questions
  def self.order_by_genres
    self.select('genres.*','count(questions.id) AS questions').left_joins(:questions).group('genres.id').order('questions DESC')
  end
end
