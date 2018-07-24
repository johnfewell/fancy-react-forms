import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { fetchForms, createForm, deleteForm } from '../actions';
import { Card, Header, Container, Grid, Form, Divider, Button, Icon, Menu, Dropdown, Label, Segment } from 'semantic-ui-react';
import HeaderMenu from './header_menu';
import SecondaryMenu from './secondary_menu';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  handleDelete = (id) => {
    const noop = function(){};
    this.props.deleteForm(id, noop)
    // confirmAlert({
    //   title: 'Confirm delete',
    //   message: 'This will delete your form and all of its questions',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => this.props.deleteForm(82, noop)
    //     },
    //     {
    //       label: 'No',
    //       onClick: () => this.props.history.push('/')
    //     }
    //   ]
    // })
  };

  renderForms(){
    return _.map(this.props.forms, form => {
      console.log('FORM PROPS', form)
      const formUrl = `forms/${form.id}`
      const editUrl = `forms/edit/${form.id}`
      return (
        <Grid.Column>
          <Card>
            <Card.Content as={Link} to={editUrl}>
              <Card.Header>{form.name}</Card.Header>
              <Card.Meta> Questions
              </Card.Meta>
              <Card.Description>
              {form.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Menu secondary>
                <Menu.Item>
                   Responses
                </Menu.Item>
                <Menu.Menu position='right'>
                 <Dropdown item icon='ellipsis horizontal' simple>
                   <Dropdown.Menu>
                     <Dropdown.Item as={Link} to={editUrl}>Edit</Dropdown.Item>
                     <Dropdown.Item as={Link} to={formUrl}>Preview</Dropdown.Item>
                     <Dropdown.Item>Duplicate</Dropdown.Item>
                     <Dropdown.Item>Results</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item onClick={this.handleDelete}><Label color='red'>Delete</Label></Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </Menu.Menu>
             </Menu>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
            <label>{field.label} </label>
            <input
            className="form-control"
            type="text"
            {...field.input}
            />
      </div>
    );
  }

  onSubmit(values) {
    this.props.createForm(values)
  }

  render () {
    const { handleSubmit } = this.props;

    const newFormUrl = 'forms/new';
    const newFormString = 'New Form';

    return (
        <div>
        <HeaderMenu firstUrl={newFormUrl} firstString={newFormString}/>
        <Container fluid>
        <Grid columns='equal'>
          <Grid.Column width={3}>

          </Grid.Column>
          <Grid.Column>
          <SecondaryMenu firstUrl={newFormUrl} firstString={newFormString}/>
          <Grid.Column width={10}>
          <Grid doubling columns={5}>
              {this.renderForms()}
            <Card>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="Name"
                  name="name"
                  component={this.renderField}
                />
                <Field
                  label="Description"
                  name="description"
                  component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Card>
            </Grid>
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forms: state.forms.formsState};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForms: fetchForms,
    createForm: createForm,
    deleteForm: deleteForm
  }, dispatch);
};

FormsIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsIndex);

function validate(values){

}

export default reduxForm({
  validate,
  form: 'FormNewForm' // a unique name for this form
})(FormsIndex);
