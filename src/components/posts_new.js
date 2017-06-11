/**
 * Created by mfpinheiro on 10/06/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

  renderTitleField = (field) => {
    console.log(field)
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  };

  render() {
    return (
      <form action="">
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);