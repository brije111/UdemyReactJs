import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';

class StreamForm extends Component {
    renderInput = ({ input, label, meta }) => {
        //console.log(meta);
        const className = meta.error && meta.touched ? 'error' : ''
        return <Form.Field className={className}>
            <label>{label}</label>
            <input  {...input} autoComplete='off' />
            <div>{this.renderError(meta)}</div>
        </Form.Field>
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    renderError = ({ error, touched }) => {
        if (touched)
            return <Message error header={error} />;
    }
    render() {
        //console.log(this.props);
        return (
            <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <Button primary >Submit</Button>
            </Form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title)
        errors.title = "You must enter a title";

    if (!formValues.description)
        errors.description = "You must enter a description";

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
