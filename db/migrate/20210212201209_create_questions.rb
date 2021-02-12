class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string     :title       ,null: false
      t.text       :question    ,null: false
      t.string     :correct_ans ,null: false
      t.string     :wrong_ans_1 ,null: false
      t.string     :wrong_ans_2 ,null: false
      t.references :genre       ,foreign_key: true
      t.references :user        ,foreign_key: true
      t.timestamps
    end
  end
end
