import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from '../actions';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  render () {
    return (
      <div>
        Forms Index
      </div>
    );
  }
}


export default connect(null, { fetchForms })(FormsIndex);
