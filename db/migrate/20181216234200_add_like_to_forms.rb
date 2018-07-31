class AddLikeToForms < ActiveRecord::Migration[5.1]
  def change
    add_column :forms, :like, :integer
  end
end
