import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { fetchForm, deleteForm, createQuestion } from '../actions';
import { Header,
          Container,
          Form,
          Segment,
          Icon,
          Grid,
          Divider,
        } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import VerticalSidebar from '../components/vertical_sidebar';
import HeaderMenu from '../components/header_menu';
import FormsRenderQuestions from '../components/forms_render_questions';
import '../index.css';

class FormsEdit extends Component {

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
    const { id } = this.props.match.params;
    values.form_id = id
    this.props.createQuestion(values)
    this.props.reset();
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deleteForm(id, () => {
      this.props.history.push('/');
    });
  }

  submitDelete = () => {confirmAlert({
    title: 'Really delete?',
    message: 'This will delete your form and all of its questions',
    buttons: [
      {
        label: 'Yes',
        onClick: () => this.onDeleteClick()
      },
      {
        label: 'No',
        onClick: () => this.props.history.push('/')
      }
      ]
    })
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
  const { handleSubmit } = this.props;

  return (
    <div>
      <HeaderMenu />
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
            <VerticalSidebar submitDelete={this.submitDelete}/>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h3'>Type a question and hit [enter]</Header>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Form size='big'>
              <Form.Group widths='equal' >
                <Form.Field>
                <Field
                  label="Question"
                  name="content"
                  component={this.renderField}
                />
                </Form.Field>
                </Form.Group>
                <Divider hidden />
              </Form>
              </form>
            </Grid.Column>
            <Grid.Column width={1}>
            <Divider vertical><Icon name='caret square right' /></Divider>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container text>
              <div className='scroll-bar'>
                 <Form size='huge'>
                   <FormsRenderQuestions form={this.props.form}/>
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

function validate(values){

}

export default reduxForm({
  validate,
  form: 'NewQuestion' // a unique name for this form
})(FormsEdit);
