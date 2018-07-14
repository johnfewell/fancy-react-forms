class FormsController < ApplicationController
  def index
      render(
        status: 200,
        json: Form.all
      )
  end

  def show
      form = Form.find(params[:id])
      render(
        status: 200,
        json: { id: form.id, name: form.name, questions: form.questions }
        )
  end

  def delete
      form = Form.find(params[:id])
      render(
        status: 200,
        json: { id: form.id, name: form.name, questions: form.questions }
        )
  end

end
