import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
// import { } from '../actions';
import { Header,
          Container,
          Form,
          Segment,
          Icon,
          Grid,
          Divider,
        } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import HeaderMenu from '../components/header_menu';

class FormResponses extends Component {
  render() {

    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default FormResponses
