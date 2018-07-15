import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchForms, createForm } from '../actions';
import { Card, Header, Container, Grid, Form, Divider } from 'semantic-ui-react';
import HeaderMenu from './header_menu';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  renderForms(){
    return _.map(this.props.forms, form => {
      const formUrl = `forms/${form.id}`
      return (
        <Card
          href={formUrl}
          key={form.id}
          header={form.name}
          meta='0 Responses'
          description='Duis convallis varius tellus id gravida. Vestibulum pulvinar lacus hendrerit neque ullamcorper sagittis. Nullam quis lectus et ligula ullamcorper iaculis sit amet et purus. Morbi consectetur dui sit amet massa sollicitudin, et consectetur est malesuada. Pellentesque ac malesuada mauris.'
        />
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
    this.props.createForm(values);
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props;

    const newFormUrl = 'forms/new';
    const newFormString = 'New Form';

    return (
      <Container>
        <HeaderMenu firstUrl={newFormUrl} firstString={newFormString}/>
        <Header as='h1'>Forms</Header>
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
