import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { Header, Container} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import FormGroupShow from './form_group_show';

class FormsShow extends Component {

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/:id',
      exact: true,
      strict: false
    })
    console.log(this.props)
    const id = match.params.id;
    this.props.fetchForm(id);
  }

  renderQuestions(){
    if (this.props.form == null) {
      return <p>loading...</p>
    } else {
      return this.props.form.questions.map((question,i) => <FormGroupShow question={question} />)
     }
  }


  test(){
    if (this.props.form == null) {
      return <p>loading...</p>
    } else {
      return this.props.form.name
    }
  }

  render(){
    return (
       <Container text>
        <Header as='h1'>Name: {this.test()}</Header>

        {this.renderQuestions()}
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
  return { form: forms[ownProps.match.params.id] }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
