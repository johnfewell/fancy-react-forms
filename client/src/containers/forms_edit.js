import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { fetchForm, deleteForm, createQuestion } from '../actions';
import { Header,
          Container,
          Form,
          Checkbox,
          Loader,
          Button,
          Segment,
          Menu,
          Icon,
          Sidebar,
          Grid,
          Image,
        } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import FormGroupShow from './form_group_show';
import QuestionText from './question_text';
import VerticalSidebar from './vertical_sidebar';
import HeaderMenu from '../components/header_menu';
import FormsRenderQuestions from './forms_render_questions';
import FormsNew from './forms_new';
import validate from './validate'
import '../index.css';

class FormsEdit extends Component {

  constructor(props) {
    super(props);

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
    debugger
    const { id } = this.props.match.params;
    values.form_id = id
    this.props.createQuestion(values);
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deleteForm(id, () => {
      this.props.history.push('/');
    });
  }

  renderQuestionInputs(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Question"
          name='content'
          component={this.renderField}
        />
      )
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>)
  }

  renderField () {
    const { input, label, type, meta: { touched, error } } = this.props;
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  }
  renderMembers(){
  const { fields, meta: { error, submitFailed } } = this.props;
      <div>
        <Button type="button" onClick={() => fields.push({})}>
          Add Text Question
        </Button>
        {submitFailed && error && <span>{error}</span>}
      {fields.map((member, index) => (
        <div>

          <h4>{index + 1} <Icon name='right arrow' /> Text</h4>
          <Field
            name={`${member}.content`}
            type="text"
            component={this.renderField}
          />

          <Button icon
            type="button"
            onClick={() => fields.remove(index)}
            >
            <Icon name='trash' color='red' />
          </Button>
          </div>
      ))}
      </div>
  }

  FieldArraysForm(){
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <FieldArray name="members" component={this.renderMembers} />
        <div>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </div>
      </Form>
    )
  }

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/edit/:id',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchForm(id);
  }

render() {
  const { handleSubmit, form } = this.props;
  const { id } = this.props.match.params;

  return (
    <div>
      <HeaderMenu />
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}>
                <VerticalSidebar />
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h3'>Editing Form</Header>
                  <FormsNew />
                <Menu.Item as='a'
                  onClick={this.onDeleteClick.bind(this)}
                >
                <Icon name='trash alternate' />
                Delete
              </Menu.Item>
              </Grid.Column>
              <Grid.Column width={8}>
                <Container text>
                <div className='scroll-bar'>
                   <Form size='huge'>
                     {this.FeildArraysForm}
                   </Form>
                 </div>
               </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm,
    deleteForm: deleteForm,
    createQuestion: createQuestion,
  }, dispatch);
};

function mapStateToProps({ forms }, ownProps) {
  return { form: forms[ownProps.match.params.id] }
}

FormsEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsEdit);


export default reduxForm({
  validate,
  form: 'NewQuestion' // a unique name for this form
})(FormsEdit);
