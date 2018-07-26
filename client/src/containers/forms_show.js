import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm, submitForm } from '../actions';
import { Header, Container, Loader, Button, Grid, Modal, Icon} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Form, reduxForm } from 'redux-form'
import FormGroupShow from '../components/form_group_show';
import RemoteSubmitButton from '../components/RemoteSubmitButton';
import FormsShowIntro from '../components/forms_show_intro';
import {partsOfElementInViewport, elementInViewport } from '../functions/functions.js';
import '../index.css';

function submit(values) {
}

class FormsShow extends Component {

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/:id',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchForm(id);
    document.addEventListener('scroll', this.handleScroll.bind(this));
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    let answersArray = Object.keys(values).map( key => ({
      question_id: key,
      content: values[key]
    }) )
    let answers_attributes =  answersArray
     let newResponse = {
         form_id: id,
         answers_attributes
       }
     this.props.submitForm(newResponse)
  }

  handleScroll(){
    let elements = document.getElementsByClassName('question');
    _.each(elements, (el) => {
      if(partsOfElementInViewport(el)){
        el.classList.add("visible");
      }else{
        el.classList.remove("visible");
      }

      if(elementInViewport(el)){
        el.classList.remove("inactive");
      }else{
        el.classList.add("inactive");
      }
    });
  }

  renderQuestions(){
    if (this.props.form == null) {
      return <Loader active inline='centered' />
    } else {
      return this.props.form.questions.map((question,i) => <FormGroupShow question={question} index={i} />)
     }
  }

  render(){
    return (
      <div className='form-body'>
       <Container text>
       <Modal centered={false} dimmer='inverted' open={this.props.formSubmitStatus.formSubmitStatus}>
          <Header as='h2'><Icon size='big' color='green' name='check circle outline'/> Submssion Successful!</Header>
          <Header as='h3'>You can now close the page</Header>
       </Modal>
        <div className='form-spacer'></div>
        <FormsShowIntro form={this.props.form}/>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {this.renderQuestions()}
          <Grid centered>
            <RemoteSubmitButton>Submit</RemoteSubmitButton>
          </Grid>
          </Form>
            <div className='form-spacer'></div>
      </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm,
    submitForm: submitForm,
  }, dispatch);
};

function mapStateToProps({ forms }, ownProps) {
  return {
    form: forms[ownProps.match.params.id],
    formSubmitStatus: forms
  }
}

FormsShow = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsShow);

export default reduxForm({
  form: 'remoteSubmit', // a unique identifier for this form
  onSubmit: submit // submit function must be passed to onSubmit
})(FormsShow)
