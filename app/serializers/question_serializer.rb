class QuestionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :question_type, :form_id
  belongs_to :form
  has_many :answers
end
