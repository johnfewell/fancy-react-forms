import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { bindActionCreators } from 'redux';

class FormsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.fetchForm(id);
  }

  render(){

    return (
      <div>
        Forms show
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
