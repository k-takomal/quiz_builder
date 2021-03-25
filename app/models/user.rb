class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true, length:{maximum:4}
  has_many :questions
  has_many :comments

   # ユーザーの並びを問題数の多い順にする
   def self.order_by_users
    self.select('users.*','count(questions.id) AS questions').left_joins(:questions).group('users.id').order('questions DESC')
  end
  # ユーザーの並びを問題数の多い順にする

end
