class Question < ApplicationRecord
  has_many :form_questions
  has_many :forms, :through => :form_questions
  has_many :answers
  accepts_nested_attributes_for :answers
  validates :content, presence: true
end
