import _ from "lodash";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchForms, createForm, toggleHidden } from "../actions";
import {
  Card,
  Container,
  Grid,
  Divider,
  Button,
  Menu,
  Loader,
  Form
} from "semantic-ui-react";
import HeaderMenu from "../components/header_menu";
import SecondaryMenu from "../components/secondary_menu";
import FormCard from "../components/form_card";

class FormsIndex extends Component {
  handleUpVote = () => {
    this.setState({ votes: this.state.votes + 1 });
  };

  componentDidMount() {
    this.props.fetchForms();
  }

  renderNewFormCard() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>New Form</Card.Header>
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <Form size="large">
              <Form.Group>
                <Form.Field>
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
              <Divider />
              <Grid centered>
                <Button type="submit" className="btn btn-primary">
                  Submit
                </Button>
              </Grid>
            </Form>
          </form>
        </Card.Content>
      </Card>
    );
  }

  renderForms() {
    let sortedForms = [...this.props.forms].sort(function(a, b) {
      return b.like - a.like;
    });
    return _.map(sortedForms, form => {
      return <FormCard form={form} key={form.id} />;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label} </label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.onHandleToggle();
    this.props.reset();
    this.props.createForm(values);
  }

  onHandleToggle = () => {
    const toggle = !this.props.ui;
    this.props.toggleHidden(toggle);
  };

  render() {
    const newFormUrl = "forms/new";
    const newFormString = "New Form";

    if (!this.props.forms) {
      return <Loader />;
    }
    return (
      <div>
        <HeaderMenu />
        <Grid>
          <Grid.Column width={2}>
            <Menu secondary>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Button
                    onClick={this.onHandleToggle}
                    icon="plus"
                    content="New Form"
                    color="teal"
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            <SecondaryMenu />
            <Container fluid>
              <Card.Group>
                {this.props.ui && this.renderNewFormCard()}
                {this.renderForms()}
              </Card.Group>
            </Container>
          </Grid.Column>
        </Grid>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchForms: fetchForms,
      createForm: createForm,
      toggleHidden: toggleHidden
    },
    dispatch
  );
};

FormsIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormsIndex);

export default reduxForm({
  form: "FormNewForm" // a unique name for this form
})(FormsIndex);
