class AddFormResponseIdToAnswers < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :form_response_id, :integer
  end
end
