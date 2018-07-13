import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { bindActionCreators } from 'redux';
import LoadingPage from './loading_page';

class FormsShow extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       form: []
//     };
//     console.log(this.props)
// }

  componentWillMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/:id',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchForm(id);
  }

  componentDidMount(){
    console.log(this.props)
  }

  renderForm(){

    return <p>{}</p>
  }

  render() {
  let hasData = (this.props.form.loaded && !this.props.form.loading)
  return (
    <div>
      { hasData ? (
        <p>Success</p>
      ) : (
        <LoadingPage />
      )}
    </div>
  )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm
  }, dispatch);
};

// function mapStateToProps({ forms }, ownProps) {
//   return { form: forms[ownProps.match.params.id] }
// }

function mapStateToProps({ forms }, ownProps) {
  let formId = parseInt(ownProps.match.params.id)
  if (!this.state.form.loaded) {
    return {
      form: {
        loading: false,
        loaded: false,
        formId: formId
      }
    }
  } else {
    return { form: forms[formId] }
  }
}

//
// function mapStateToProps(state) {
//   return { form: state.forms};
// }


export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
