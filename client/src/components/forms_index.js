import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from '../actions';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  render () {
    console.log(this.props.forms)
    return (
      <div>
        Forms Index
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forms: state.forms };
}

export default connect(mapStateToProps, { fetchForms })(FormsIndex);
