class CreateJoinTableFormQuestions < ActiveRecord::Migration[5.1]
  def change
    create_join_table :forms, :questions do |t|
      # t.index [:evaluation_id, :question_id]
      # t.index [:question_id, :evaluation_id]
    end
  end
end
