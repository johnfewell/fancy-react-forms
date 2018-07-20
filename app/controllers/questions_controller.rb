class QuestionsController < ApplicationController
  def index
      render(
        status: 200,
        json: Question.all
      )
  end

  def show
      question = Question.find(params[:id])
      render json: question
      # render(
      #   status: 200,
      #   json: { id: question.id, name: question.name, questions: question.questions }
      #   )
  end

  def create
    
    question = Question.new(question_params)
    if question.save
      render json: question, status: 201
    else
      render json: { message: "There was an error saving your question."}
    end
  end

  def destroy
    question = Question.find(params[:id])
    if question.destroy
      render json: { message: "Your question was deleted"}, status: 200
    else
      render json: { message: "There was an error deleting question."}
    end
  end

  private

  def question_params
    params.require(:question).permit(:form_id, :content, :question_type, :_destroy)
  end

end
