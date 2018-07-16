import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchForms, createForm } from '../actions';
import { Card, Header, Container, Grid, Form, Divider, Button, Icon, Menu, Dropdown, Label, Segment } from 'semantic-ui-react';
import HeaderMenu from './header_menu';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  renderForms(){
    return _.map(this.props.forms, form => {
      const formUrl = `forms/${form.id}`
      const editUrl = `forms/edit/${form.id}`
      return (

          <Card>
            <Card.Content as={Link} to={editUrl}>
              <Card.Header>{form.name}</Card.Header>
              <Card.Meta>0 Responses</Card.Meta>
              <Card.Description>
                Duis convallis varius tellus id gravida. Vestibulum pulvinar lacus hendrerit neque ullamcorper sagittis.
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
            <Menu secondary>
                <Menu.Item>
                  5 Responses
                </Menu.Item>
                <Menu.Menu position='right'>
                 <Dropdown item icon='ellipsis horizontal' simple>
                   <Dropdown.Menu>
                     <Dropdown.Item>Edit</Dropdown.Item>
                     <Dropdown.Item as={Link} to={formUrl}>Preview</Dropdown.Item>
                     <Dropdown.Item>Duplicate</Dropdown.Item>
                     <Dropdown.Item>Results</Dropdown.Item>
                     <Dropdown.Divider />
                     <Dropdown.Item><Label color='red'>Delete</Label></Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
               </Menu.Menu>
             </Menu>
            </Card.Content>
          </Card>

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
    this.props.createForm(values, () => {
      this.props.history.push("/");
    });
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
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Group itemsPerRow={5}>
              {this.renderForms()}
            <Card>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  label="Name"
                  name="name"
                  component={this.renderField}
                />
              </form>
            </Card>
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={1}>

          </Grid.Column>
        </Grid>
      </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forms: state.forms.forms_state};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForms: fetchForms,
    createForm: createForm
  }, dispatch);
};

// export default connect(mapStateToProps, { fetchForms })(reduxForm({
//       form: 'FormNewForm',
// })(FormsIndex);

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
