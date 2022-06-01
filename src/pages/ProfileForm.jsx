import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Header from '../Components/Header';
import { useCallbackPrompt } from '../usePrompt';

const ProfileForm = () => {
  const [isDirty, setIsDirty] = useState(false);

  const [showPrompt, confirmNavigation] = useCallbackPrompt(isDirty);
  console.log(confirmNavigation);

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
    console.log(values);
    actions.isSubmitting(false);
  };

  return (
    <div>
      <Header />

      <h3>Profile Information</h3>

      <Formik initialValues={values} onSubmit={onSubmit}>
        {({ dirty }) => {
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
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      </Formik>

      {showPrompt && alert('Are you sure you want to leave the page?')}
    </div>
  );
};

export default ProfileForm;
