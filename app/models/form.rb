class Form < ApplicationRecord
  has_many :form_questions
  has_many :questions
  has_many :form_responses
  accepts_nested_attributes_for :questions, reject_if: lambda {|attributes| attributes['content'].blank?}

  validates :name, presence: true, length: { minimum: 5 }

end
