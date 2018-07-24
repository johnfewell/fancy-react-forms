class FormResponse < ApplicationRecord
  has_many :answers
  belongs_to :form, optional: true
  accepts_nested_attributes_for :answers, :allow_destroy => true
end
