import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { bindActionCreators } from 'redux';

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
      return this.props.form.questions.map((question,i) => <li key={i}>{question.content}</li>)
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
      <div>
        <h1>Name: {this.test()}</h1>

        Questions: {this.renderQuestions()}
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
  return { form: forms[ownProps.match.params.id] }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
