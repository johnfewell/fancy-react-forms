import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForms } from '../actions';
import { Card, Header, Container, Grid } from 'semantic-ui-react';
import HeaderMenu from './header_menu';

class FormsIndex extends Component {
  componentDidMount() {
    this.props.fetchForms();
  }

  renderForms(){
    return _.map(this.props.forms, form => {
      const formUrl = `forms/${form.id}`
      return (
          <Card
            href={formUrl}
            key={form.id}
            header={form.name}
            meta='0 Responses'
            description='Duis convallis varius tellus id gravida. Vestibulum pulvinar lacus hendrerit neque ullamcorper sagittis. Nullam quis lectus et ligula ullamcorper iaculis sit amet et purus. Morbi consectetur dui sit amet massa sollicitudin, et consectetur est malesuada. Pellentesque ac malesuada mauris.'
          />
      )
    });
  }

  render () {
    return (
      <Container>
        <HeaderMenu />
        <Header as='h1'>Forms</Header>
        <Card.Group itemsPerRow={4}>
          {this.renderForms()}
        </Card.Group>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { forms: state.forms.forms_state};
}

export default connect(mapStateToProps, { fetchForms })(FormsIndex);
