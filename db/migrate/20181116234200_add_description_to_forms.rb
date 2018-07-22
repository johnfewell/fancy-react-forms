class AddDescriptionToForms < ActiveRecord::Migration[5.1]
  def change
    add_column :forms, :description, :text
  end
end
