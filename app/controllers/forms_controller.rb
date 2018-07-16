class FormsController < ApplicationController
  def index
      render(
        status: 200,
        json: Form.all
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
    if form.destroy
      render json: { message: "Your form was deleted"}, status: 200
    else
      render json: { message: "There was an error deleting form."}
    end
  end

  private

  def form_params
    params.require(:form).permit(:name, :_destroy)
  end

end
