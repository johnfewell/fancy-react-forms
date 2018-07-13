class FormsController < ApplicationController
  def index
      render(
        status: 200,
        json: Form.all
      )
  end


  #Another way:
  # render json: @post, include: ['author', 'comments', 'comments.user']
  def show
      form = Form.find(params[:id])
      render(
        status: 200,
        json: { id: form.id, name: form.name, questions: form.questions }
        )
  end

end
