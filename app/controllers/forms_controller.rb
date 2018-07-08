class FormsController < ApplicationController
  def index

    # key = params[:key]
    #
    # if key.blank?
    #   render status: 400, json: { error: 'Expected parameter `key` '}
    # else
      render(
        status: 200,
        json: Form.first.questions
      )
    # end
  end
end
