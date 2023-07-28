import React, { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Input from '../components/Input';
import Button from '../components/Button';
import Textarea from '../components/Textarea';
import { promiseTimeout } from '../utilities';
import { useTheme } from '../context/theme';
import { small } from '../styles/breakpoints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  .Toastify__toast {
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    font-family: ${({ font }) => font};
  }
`;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  right: 2rem;
  top: 5rem;
  width: calc(100% + 1rem);
  bottom: 0px;
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: -1;
  transition: background-color 0.4s ease;
  height: calc(100% - 2rem);

  @media screen and (max-width: ${small}) {
    right: 20px;
    width: 110%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
`;

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  name: Yup.string().trim().required('Please enter your name.'),
  message: Yup.string().trim().required('Please enter your message.'),
});

const ReCaptchaContainer = styled.div`
  /* display: none; */
`;

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const recaptchaRef = useRef();
  const { state } = useLocation();
  const { theme } = useTheme();

  const sendEmail = async (values, { resetForm }) => {
    try {
      setSubmitting(true);

      const token = await Promise.race([
        recaptchaRef.current.executeAsync(),
        promiseTimeout(),
      ]);

      console.log(token);

      if (token && token !== 'timed out') {
        await axios({
          method: 'POST',
          url: 'https://formspree.io/f/mbjqdqpw',
          data: values,
        });

        toast.success('Your message has been sent', {
          position: toast.POSITION.TOP_CENTER,
        });

        resetForm();
      } else {
        toast.error('Something went wrong. Please try again', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (e) {
      toast.error(e.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const {
    handleSubmit,
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: { name: '', email: '', message: state?.message || '' },
    initialErrors: { error: 'invalid' },
    onSubmit: sendEmail,
    validationSchema: schema,
  });

  const setFieldValueAndTouched = (field, value) => {
    setFieldTouched(field, true);
    setFieldValue(field, value);
  };

  return (
    <Container
      backgroundColor={theme.card}
      color={theme.color}
      border={theme.border.default}
      borderRadius={theme.borderRadius.small}
      font={theme.font}
    >
      <Background
        borderRadius={theme.borderRadius.default}
        backgroundColor={theme.boxShadow}
      />
      <InputContainer>
        <Input
          name="name"
          label="Name"
          value={values.name}
          onChange={(e) => setFieldValueAndTouched('name', e.target.value)}
          onBlur={handleBlur('name')}
          error={touched.name && errors.name}
          valid={values.name && !errors.name}
        />
        <Input
          name="email"
          label="Email"
          value={values.email}
          onChange={(e) => setFieldValueAndTouched('email', e.target.value)}
          onBlur={handleBlur('email')}
          error={touched.email && errors.email}
          valid={values.email && !errors.email}
        />
      </InputContainer>
      <Textarea
        name="message"
        label="Message"
        value={values.message}
        onChange={(e) => setFieldValueAndTouched('message', e.target.value)}
        onBlur={handleBlur('message')}
        error={touched.message && errors.message}
        valid={values.message && !errors.message}
      />
      <ButtonContainer>
        <Button onClick={handleSubmit} loading={submitting} disabled={!isValid}>
          Send Message
        </Button>
      </ButtonContainer>
      {process.env.REACT_APP_RECAPTCHA_KEY && (
        <ReCaptchaContainer>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
          />
        </ReCaptchaContainer>
      )}
      <ToastContainer />
    </Container>
  );
}

export default ContactForm;
