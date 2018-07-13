import React from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

const FormGroupShow = ({question}) => (
  <div>
    <Form size='huge'>
        <Form.Group widths='equal'>
          <Form.Field label={question.content} control='input' placeholder='Type it in yo' />
        </Form.Group>
        <Divider hidden />
      </Form>
  </div>
)
export default FormGroupShow
