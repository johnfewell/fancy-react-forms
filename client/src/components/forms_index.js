import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchForms, createForm } from '../actions';
import { Card, Header, Container, Grid, Form, Divider, Button } from 'semantic-ui-react';
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
            <Card.Content>
              <Card.Header>{form.name}</Card.Header>
              <Card.Meta>0 Responses</Card.Meta>
              <Card.Description>
                Duis convallis varius tellus id gravida. Vestibulum pulvinar lacus hendrerit neque ullamcorper sagittis.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button as={Link} to={formUrl} basic color='green'>
                  View Form
                </Button>
                <Button as={Link} to={editUrl} basic color='red'>
                  Edit Form
                </Button>
              </div>
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
        <Container>
        <Card.Group itemsPerRow={4}>
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
