import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from '../actions';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  renderForms(){
    return _.map(this.props.forms.forms, form => {
      return (
        <li className="list-group-item" key={form.id}>
          {form.name}
        </li>
      )
    });
  }

  render () {
    return (
      <div>
        <h3>Forms</h3>
        <ul className="list-group">
          {this.renderForms()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { forms: state.forms };
}

export default connect(mapStateToProps, { fetchForms })(FormsIndex);
