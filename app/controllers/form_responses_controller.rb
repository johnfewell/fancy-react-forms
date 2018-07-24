class FormResponsesController < ApplicationController
  def index
      render(
        status: 200,
        json: FormResponse.all
      )
  end

  def show
      form_response = FormResponse.find(params[:id])
      render json: form_response, include: ['answers']
      # render(
      #   status: 200,
      #   json: { id: form_response.id, name: form_response.name, questions: form_response.questions }
      #   )
  end

  def create
    form_response = FormResponse.new(form_response_params)
    if form_response.save
      render json: form_response, status: 201
    else
      render json: { message: "There was an error saving your form_response."}
    end
  end

  def destroy
    form_response = FormResponse.find(params[:id])
    form_response_questions = Question.where(form_response_id: params[:id])

    if form_response_questions.destroy_all && form_response.destroy
      render json: { message: "Your form_response was deleted"}, status: 200
    else
      render json: { message: "There was an error deleting form_response."}
    end
  end

  private

  def form_response_params
    params.require(:form_response).permit(:form_id, :answers_attributes => [:id, :content, :question_id, :_destroy])
  end

end
