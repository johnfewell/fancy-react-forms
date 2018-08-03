import _ from 'lodash';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchForms, createForm, toggleHidden } from '../actions';
import { Card, Container, Grid, Divider, Button, Menu, Loader, Form } from 'semantic-ui-react';
import HeaderMenu from '../components/header_menu';
import SecondaryMenu from '../components/secondary_menu';
import FormCard from '../components/form_card';

class FormsIndex extends Component {

  handleUpVote = () => {this.setState({ votes: this.state.votes+1 })}

  constructor(props) {
    super(props)
    this.onHandleToggle = this.onHandleToggle.bind(this)
  }
  componentDidMount() {
    this.props.fetchForms();
  }

  renderNewFormCard(){
    return(
    <Grid.Column>
    <Card>
    <Card.Content>
      <Card.Header>New Form</Card.Header>
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Form size='large'>
        <Form.Group>
        <Form.Field >
          <Field
            label="Name:"
            name="name"
            component={this.renderField}
            />
            </Form.Field>
            <Form.Field>
          <div className="field">
            <label>Description:</label>
            <Field
              label=""
              className
              name="description"
              component="textarea"
            />
          </div>
          </Form.Field>
          </Form.Group>
          <Divider/>
        <Grid centered>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Grid>
        </Form>
      </form>
      </Card.Content>
    </Card>
    </Grid.Column>
  )}

  renderForms(){
    let sortedForms = [...this.props.forms].sort(function (a, b) {
      return b.like - a.like;
    });
    return _.map(sortedForms, form => {
      return <FormCard form={form} key={form.id}/>
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
            <label>{field.label} </label>
            <input
            className="form-control"
            type="text"
            {...field.input}
            />
      </div>
    );
  }

  onSubmit(values) {
    this.onHandleToggle()
    this.props.reset();
    this.props.createForm(values)
  }

  //onHandleToggle = () => {}

  onHandleToggle() {
    const toggle = !this.props.ui
    this.props.toggleHidden(toggle)
  }

  render () {
    // const { handleSubmit } = this.props;
    const newFormUrl = 'forms/new';
    const newFormString = 'New Form';

    if (!this.props.forms) {
      return <Loader />;
    }
    return (
        <div>
        <HeaderMenu firstUrl={newFormUrl} firstString={newFormString}/>
        <Container fluid>
        <Grid columns='equal'>
          <Grid.Column width={3}>
          <Menu secondary>
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button onClick={this.onHandleToggle} icon="plus" content="New Form"  color="teal"/>
          </Menu.Item>
          </Menu.Menu>
          </Menu>
          </Grid.Column>
          <Grid.Column>
          <SecondaryMenu firstUrl={newFormUrl} firstString={newFormString}/>
          <Grid.Column width={10}>
          <Grid doubling columns={5}>
              {this.renderForms()}
              {this.props.ui && this.renderNewFormCard()}
            </Grid>
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forms: state.forms.formsState,
    ui: state.ui.isHidden
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchForms: fetchForms,
    createForm: createForm,
    toggleHidden: toggleHidden
  }, dispatch);
};

FormsIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsIndex);

export default reduxForm({
  form: 'FormNewForm' // a unique name for this form
})(FormsIndex);
