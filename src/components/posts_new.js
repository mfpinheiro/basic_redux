/**
 * Created by mfpinheiro on 10/06/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

  renderField = (field) => {
    return (
      <div className="form-group">
        <label htmlFor={field.name}>{field.label}</label>
        <input
          name={field.name}
          className="form-control"
          type="text"
          {...field.input} />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  };

  onSubmit = (values) => {
    console.log(values)
  };

  render() {
    const { handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values)
  const erros = {};

  if (!values.title) {
    erros.title = 'Enter a title!';
  }
  if (!values.categories) {
    erros.categories = 'Enter some categories';
  }
  if (!values.content) {
    erros.content = 'Enter some content';
  }
  return erros;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);