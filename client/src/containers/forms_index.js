import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import { fetchForms, createForm, deleteForm } from '../actions';
import { Card, Header, Container, Grid, Form, Divider, Button, Icon, Menu, Dropdown, Label, Segment, Loader } from 'semantic-ui-react';
import FormCard from '../components/form_card.js'
import HeaderMenu from '../components/header_menu';
import SecondaryMenu from '../components/secondary_menu';

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
      const formUrl = `forms/${form.id}`
      const editUrl = `forms/edit/${form.id}`
      return (
        <FormCard
        editUrl={editUrl}
        formUrl={formUrl}
        form={form}
        handleDelete={this.handleDelete}
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
