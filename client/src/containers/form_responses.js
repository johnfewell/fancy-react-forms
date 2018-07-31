import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchResponses } from '../actions';
import { Header,
          Container,
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
    const result = Object.keys(responses).map((item, index) => {
      return (
        <List as='ol' key={index}>
          <List.Item as='li'>
            {item}
            <List.Item as='ol'>
              {responses[item].map((answer, i) => {
                return <List.Item as='li' value='-' key={i}>{answer}</List.Item>
              })}
           </List.Item>
          </List.Item>
        </List>
      )
    })
    return result
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
            <Header as='h4'>Questions and Responses</Header>
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
