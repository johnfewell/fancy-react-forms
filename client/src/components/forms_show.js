import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { Header, Container, Form, Loader} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import FormGroupShow from './form_group_show';
import '../index.css';

class FormsShow extends Component {

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/:id',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchForm(id);
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
       <Container text>
        <div className='form-spacer'></div>
        <Form size='huge'>
          {this.renderQuestions()}
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm
  }, dispatch);
};

function mapStateToProps({ forms }, ownProps) {
  console.log(ownProps)
  return { form: forms[ownProps.match.params.id] }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
