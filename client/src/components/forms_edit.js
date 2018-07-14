import _ from 'lodash';
import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { connect } from 'react-redux';
import { fetchForm } from '../actions';
import { Header,
          Container,
          Form,
          Loader,
          Button,
          Segment,
          Menu,
          Icon,
          Sidebar,
          Grid,
          Image,
        } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import FormGroupShow from './form_group_show';
import QuestionText from './question_text'
import VerticalSidebar from './vertical_sidebar'
import '../index.css';

class FormsShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animation: 'slide along',
      direction: 'left',
      dimmed: false,
      visible: false,
    };
  }

  handleAnimationChange = () => (
    this.setState({ visible: !this.state.visible }))

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: '/forms/edit/:id',
      exact: true,
      strict: false
    })
    const id = match.params.id;
    this.props.fetchForm(id);
  }

  renderQuestions(){
    if (this.props.form == null) {
      return <Loader active inline='centered' />
    } else {
      return this.props.form.questions.map((question,i) => <FormGroupShow question={question} index={i} />)
     }
  }

render() {
  const { animation, dimmed, direction, visible } = this.state
  const vertical = direction === 'bottom' || direction === 'top'
  return (
    <div>
      <Button disabled={vertical} onClick={this.handleAnimationChange}>
        Menu
      </Button>
      <Sidebar.Pushable as={Segment}>
          <VerticalSidebar animation={animation} direction={direction} visible={visible} />
        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3'>Application Content</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  <QuestionText />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Container text>
                  <div className='scroll-bar'>
                     <Form size='huge'>
                       {this.renderQuestions()}
                     </Form>
                   </div>
                 </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForm: fetchForm
  }, dispatch);
};

function mapStateToProps({ forms }, ownProps) {
  console.log(ownProps)
  return { form: forms[ownProps.match.params.id] }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormsShow);
