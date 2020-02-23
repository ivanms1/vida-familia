import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import styles from './Contact.module.css';

const { Option } = Select;

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Container}>
        <div>
          <h1>Contáctanos</h1>
          <p className={styles.Paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            voluptatem, natus aut dolorum doloribus atque nobis et possimus
            eaque quidem nisi suscipit consequatur placeat nesciunt quisquam,
            sed quas consequuntur vero.
          </p>
        </div>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            subject: 'thank-you',
            message: ''
          }}
          onSubmit={() => {}}
        >
          {() => (
            <Form className={styles.Form}>
              <div className={styles.NameFields}>
                <Field
                  name='name'
                  size='large'
                  placeholder='Nombre'
                  component={Input}
                />
                <Field
                  name='lastName'
                  size='large'
                  placeholder='Apellido'
                  component={Input}
                />
              </div>
              <div className={styles.NameFields}>
                <Field
                  name='email'
                  size='large'
                  placeholder='Email'
                  component={Input}
                />
                <Select size='large' placeholder='Motivo'>
                  <Option value='thank-you'>Agradecimiento</Option>
                  <Option value='prayer'>Oracion</Option>
                  <Option value='invitation'>Invitacion</Option>
                </Select>
              </div>

              <Field
                name='message'
                rows={5}
                placeholder='message'
                component={TextArea}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
