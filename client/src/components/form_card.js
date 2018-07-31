// <button onClick={this.handleUpVote}>Upvote</button>
// {this.state.votes} -

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Label, Form, Divider, Grid, Menu, Card, Dropdown } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

class FormCard extends Component {
  state = {like: this.props.form.like}

  handleUpVote = () => {
    this.addLike(this.props.form.like+1)
    this.setState({ like: this.state.like+1})
  }

  addLike(value) {
    fetch(`/api/forms/${this.props.form.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({like: value})})
        .then(response => response.json())
        .then(this.setState({ like: this.state.like+1}))
    }

  render () {
    return (
      <Grid.Column key={this.props.form.id}>
        <Card>
          <Card.Content as={Link} to={`forms/edit/${this.props.form.id}`}>
            <Card.Header>{this.props.form.name}</Card.Header>
            <Card.Meta> {'questions' in this.props.form ? this.props.form.questions.length : 0} Questions
            </Card.Meta>
            <Card.Description>
            {this.props.form.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Menu secondary>
              <Menu.Item>
                {'form_responses' in this.props.form ? this.props.form.form_responses.length : 0} Responses
              </Menu.Item>
              <Menu.Menu position='right'>
               <Dropdown item icon='ellipsis horizontal' simple>
                 <Dropdown.Menu>
                   <Dropdown.Item as={Link} to={`forms/edit/${this.props.form.id}`}>Edit</Dropdown.Item>
                   <Dropdown.Item as={Link} to={`forms/${this.props.form.id}`}>Preview</Dropdown.Item>
                   <Dropdown.Item as={Link} to={`forms/${this.props.form.id}/responses`}>Results</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Menu>
           </Menu>
           <Menu>

             <Button as='div' labelPosition='right' onClick={this.handleUpVote}>
               <Button icon>
                 <Icon name='heart' />
                 Like
               </Button>
               <Label as='a' basic pointing='left'>
                  {'like' in this.state ? this.state.like : 0 }
                </Label>
             </Button>
          </Menu>
          </Card.Content>
        </Card>
      </Grid.Column>
  )}
}

  export default FormCard
