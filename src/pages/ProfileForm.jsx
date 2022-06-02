import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Header from '../Components/Header';
import { useCallbackPrompt } from '../hooks/usePrompt';

const ProfileForm = () => {
  const [isDirty, setIsDirty] = useState(false);

  const [
    showPrompt,
    // confirmNavigation,
    // cancelNavigation
  ] = useCallbackPrompt(isDirty);

  const values = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
  };

  const onSubmit = (values, actions) => {
    // RECOMMENDATION: Make use of yup library to validate the form on Submit.
    // Write your logic of form after the submission.
    console.log(values);

    actions.setSubmitting(false);
    actions.resetForm(values);
  };

  return (
    <div>
      <Header />

      <h3>Profile Information</h3>

      <Formik initialValues={values} onSubmit={onSubmit}>
        {({ dirty, isSubmitting }) => {
          return (
            <Form>
              <Field
                dirty={setIsDirty(dirty)}
                type='text'
                name='fullName'
                placeholder='Full Name'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='email'
                name='email'
                placeholder='Email'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='tel'
                name='phone'
                placeholder='Phone'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='text'
                name='address'
                placeholder='Address'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='text'
                name='zipcode'
                placeholder='Zip Code'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='text'
                name='city'
                placeholder='City'
              />
              <br />
              <Field
                dirty={setIsDirty(dirty)}
                type='text'
                name='country'
                placeholder='Country'
              />
              <br />
              <button disabled={isSubmitting} type='submit'>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>

      {/* 
            PROBLEM:
            You shouldn't use alert here as there is no way 
            to set the 'setIsDirty' state to `false. & Using alert here 
            will mount this component continuously hence maybe results 
            in crashing the web app.

            SOLUTION:
            Make a custom Modal and handle all the condition there.
      */}

      {showPrompt && alert('Are you sure you want to leave the page?')}
    </div>
  );
};

export default ProfileForm;
