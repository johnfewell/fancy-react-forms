import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { Header, Container, Loader, Image, Button} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Form, Field, reduxForm } from 'redux-form'
// import submit from './submit'
import FormGroupShow from './form_group_show';
import RemoteSubmitButton from './RemoteSubmitButton';
import FormsShowIntro from './forms_show_intro';
import {partsOfElementInViewport, elementInViewport } from '../functions/functions.js';
import '../index.css';

function submit(values) {
    let answersArray = Object.keys(values).map( key => ({
      question_id: key,
      value: values[key]
    }) )
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
      value: values[key]
    }) )
    console.log('ANSWERS:', answersArray)
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
        el.classList.add("active");
      }else{
        el.classList.remove("active");
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
        <div className='form-spacer'></div>
        <FormsShowIntro form={this.props.form}/>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {this.renderQuestions()}
          </Form>
            <RemoteSubmitButton>Submit</RemoteSubmitButton>
            <div className='form-spacer'></div>
      </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm
  }, dispatch);
};

function mapStateToProps({ forms }, ownProps) {
  return { form: forms[ownProps.match.params.id],
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

// export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
