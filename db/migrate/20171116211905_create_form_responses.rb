class CreateFormResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :form_responses do |t|
      t.references :form, foreign_key: true
      t.timestamps
    end
  end
end
