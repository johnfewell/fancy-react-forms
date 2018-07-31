// <button onClick={this.handleUpVote}>Upvote</button>
// {this.state.votes} -

import React from 'react'
import { Link } from 'react-router-dom';

import { Form, Divider, Grid, Menu, Card, Dropdown } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

const FormCard = props => {
  return (
    <Grid.Column key={props.form.id}>
      <Card>
        <Card.Content as={Link} to={`forms/edit/${props.form.id}`}>
          <Card.Header>{props.form.name}</Card.Header>
          <Card.Meta> {'questions' in props.form ? props.form.questions.length : 0} Questions
          </Card.Meta>
          <Card.Description>
          {props.form.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Menu secondary>
            <Menu.Item>
              {'form_responses' in props.form ? props.form.form_responses.length : 0} Responses
            </Menu.Item>
            <Menu.Menu position='right'>
             <Dropdown item icon='ellipsis horizontal' simple>
               <Dropdown.Menu>
                 <Dropdown.Item as={Link} to={`forms/edit/${props.form.id}`}>Edit</Dropdown.Item>
                 <Dropdown.Item as={Link} to={`forms/${props.form.id}`}>Preview</Dropdown.Item>
                 <Dropdown.Item as={Link} to={`forms/${props.form.id}/responses`}>Results</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
           </Menu.Menu>
         </Menu>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

  export default FormCard
