import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from 'antd';

import styles from './Home.module.css';

const ContactForm = () => {
  return (
    <div className={styles.FormContainer}>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          message: ''
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form className={styles.Form}>
            <h1>Comunicate con nosotros</h1>
            <div className={styles.FormNames}>
              <Field
                name='name'
                placeholder='Nombre'
                size='large'
                component={Input}
              />
              <Field
                name='lastName'
                placeholder='Apellido'
                size='large'
                component={Input}
              />
            </div>
            <Field
              type='email'
              placeholder='Email'
              size='large'
              component={Input}
            />
            <Field
              name='message'
              placeholder='Mensaje'
              style={{ fontSize: '44px' }}
              size='large'
              allowClear
              rows={4}
              component={Input.TextArea}
            />
            <Button
              className={styles.SendButton}
              type='primary'
              block
              size='large'
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
