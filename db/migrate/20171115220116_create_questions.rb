class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.text :content
      t.references :form, foreign_key: true
      t.text :question_type

      t.timestamps
    end
  end
end
