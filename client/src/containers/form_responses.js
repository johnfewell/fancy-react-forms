import _ from 'lodash';

import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchResponses } from '../actions';
import { Header,
          Container,
          Form,
          Segment,
          Loader,
          Icon,
          Grid,
          Divider,
          List
        } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import HeaderMenu from '../components/header_menu';

class FormResponses extends Component {
  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/:id/responses',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchResponses(id);
  }


  renderQuestionsAndAnswers(){
    const { responses } = this.props.response;
    console.log(responses)
      // responses.map(function (nested) {
      //  return nested.map(function (element) {
      //      return (
      //        <List.Item as='li' value='*'>
      //        {element}
      //        </List.Item>
      //      )
      //  });
      // });
  }

  render() {
    const { response } = this.props;

    if (!response) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <HeaderMenu />
          <Container text>
            <Header as='h2'>{response.name}</Header>
            {this.renderQuestionsAndAnswers()}
          </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchResponses: fetchResponses
  }, dispatch);
};

function mapStateToProps(state) {
  return { response: state.forms.responsesState }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormResponses);
