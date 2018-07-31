class FormsController < ApplicationController
  def index
      render(
        status: 200,
        json: Form.all, include: ['form_responses', 'questions']
      )
  end

  def show
      form = Form.find(params[:id])
      render json: form, include: ['questions']
      # render(
      #   status: 200,
      #   json: { id: form.id, name: form.name, questions: form.questions }
      #   )
  end

  def responses
    keys = []
    values = []
    form = Form.find(params[:id])
    form.form_responses.each do |fe|
      fe.answers.each do |a|
        if !a.content.nil?
          values << a.content
          keys << a.question.content
        end
      end
    end
    pairs = keys.zip(values)
    questions_answers_hash = pairs.group_by(&:first)
    questions_answers_hash.keys.each {
      |k| questions_answers_hash[k] = questions_answers_hash[k].map(&:last) }
    responses = FormResponse.where(form_id: params[:id])
    render json: { name: form.name, responses: questions_answers_hash }
  end

  def update
    form = Form.find(params[:id])
    if form.update(form_params)
      render json: form, status: 201
    else
      render json: { message: "There was an error saving your form."}
    end
  end

  def create
    form = Form.new(form_params)
    if form.save
      render json: form, status: 201
    else
      render json: { message: "There was an error saving your form."}
    end
  end

  def destroy
    form = Form.find(params[:id])
    form_questions = Question.where(form_id: params[:id])

    if form_questions.destroy_all && form.destroy
      render json: { message: "Your form was deleted"}, status: 200
    else
      render json: { message: "There was an error deleting form."}
    end
  end

  private

  def form_params
    params.require(:form).permit(:name, :like, :description, :questions_attributes => [:id, :content, :question_type, :_destroy])
  end

end
