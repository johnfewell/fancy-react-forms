import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchForms, createForm, toggleHidden } from '../actions';
import { Card, Header, Container, Grid, Form, Divider, Button, Icon, Menu, Dropdown, Label, Segment } from 'semantic-ui-react';
import HeaderMenu from './header_menu';
import SecondaryMenu from './secondary_menu';

class FormsIndex extends Component {

  componentDidMount() {
    this.props.fetchForms();
  }

  renderNewFormCard(){
    return(
    <Grid.Column>
    <Card>
    <Card.Content>
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <div className="ui card content header">New Form</div>
          Name:
          <Field
            label=""
            name="name"
            component={this.renderField}
            />
          <div className="field">
            <label>Description:</label>
            <Field
              label=""
              className
              name="description"
              component="textarea"
            />
          </div>
          <Divider/>
        <Grid centered>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Grid>
      </form>
      </Card.Content>
    </Card>
    </Grid.Column>

  )}

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
                     <Dropdown.Item>Results</Dropdown.Item>
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

  // renderTextArea(field) {
  //   return (
  //     <div className="form-group">
  //           <label>{field.label} </label>
  //           <input
  //           className="form-control"
  //           type="textarea"
  //           {...field.input}
  //           />
  //     </div>
  //   );
  // }

  onSubmit(values) {
    this.props.createForm(values)
  }

  onHandleToggle() {
    const toggle = !this.props.ui
    this.props.toggleHidden(toggle)
  }

  render () {
    // const { handleSubmit } = this.props;
    const newFormUrl = 'forms/new';
    const newFormString = 'New Form';

    return (
        <div>
        <HeaderMenu firstUrl={newFormUrl} firstString={newFormString}/>
        <Container fluid>
        <Grid columns='equal'>
          <Grid.Column width={3}>
          <button onClick={this.onHandleToggle.bind(this)} >
            Click to show modal
          </button>
          </Grid.Column>
          <Grid.Column>
          <SecondaryMenu firstUrl={newFormUrl} firstString={newFormString} onHandleToggle={this.onHandleToggle}/>
          <Grid.Column width={10}>
          <Grid doubling columns={5}>
              {this.renderForms()}
              {this.props.ui && this.renderNewFormCard()}
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
  return {
    forms: state.forms.formsState,
    ui: state.ui.isHidden
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForms: fetchForms,
    createForm: createForm,
    toggleHidden: toggleHidden
  }, dispatch);
};

FormsIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsIndex);

export default reduxForm({
  form: 'FormNewForm' // a unique name for this form
})(FormsIndex);
