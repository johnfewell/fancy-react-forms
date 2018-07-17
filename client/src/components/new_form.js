import { Field, reduxForm } from 'redux-form';
// https://www.youtube.com/watch?v=Mo2_UPkZjJU&feature=youtu.be

render () {
  const { handleSubmit } = this.props;

  <Card>
    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
        label="Name"
        name="name"
        component={this.renderField}
      />
    </form>
  </Card>

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
  this.props.createForm(values)
}

function mapStateToProps(state) {
  return { forms: state.forms.forms_state};
}

function validate(values){

}

export default reduxForm({
  validate,
  form: 'FormNewForm' // a unique name for this form
})(FormsIndex);
