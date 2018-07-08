class FormResponse < ApplicationRecord
  has_many :answers
  belongs_to :form, optional: true

  # def answers_attributes=(answers_hashes)
  #   answers_hashes.each do |i, answer_attributes|
  #     answer = Answer.create(content: answer_attributes[:content], attendee_id: answer_attributes[:attendee_id], question_id: answer_attributes[:question_id])
  #     attendee = Attendee.find(answer_attributes[:attendee_id]) unless answer_attributes[:rating].nil?
  #     attendee.rate(answer, answer_attributes[:rating]) unless answer_attributes[:rating].nil?
  #     self.answers << answer
  #   end
  # end

  # def questions_ratings_hash
  #   keys = []
  #   values = []
  #   self.answers.each do |a|
  #     if a.content.nil?
  #       values << a.rating.average.to_f
  #       keys << a.question.content
  #     end
  #   end
  #   keys.zip(values)
  # end
  #
  # def questions_answers_hash
  #   keys = []
  #   values = []
  #   self.answers.each do |a|
  #     if !a.content.nil?
  #       values << a.content
  #       keys << a.question.content
  #     end
  #   end
  #   pairs = keys.zip(values)
  #   pairs
  # end

end
