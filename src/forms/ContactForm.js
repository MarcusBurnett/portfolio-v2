import React, { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import Button from '../components/Button';
import Textarea from '../components/Textarea';
import { useTheme } from '../context/theme';
import { medium, small } from '../styles/breakpoints';
import { fadeInAndSlideUp } from '../keyframes';
import { useWindowDimensions } from '../hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.8s ease forwards;

  @media screen and (max-width: ${medium}) {
    padding-left: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: ${medium}) {
    flex-direction: column;
  }
`;

const Background = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: absolute;
  right: 2rem;
  top: 5rem;
  width: calc(100% + 1rem);
  bottom: 0;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  z-index: -1;
  transition: background-color 0.4s ease;
  height: calc(100% - 2rem);
  opacity: 0;
  animation: 1.8s ${fadeInAndSlideUp} 0.6s ease forwards;

  @media screen and (max-width: ${small}) {
    right: 2rem;
    width: calc(100% - 1rem);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;

  @media screen and (max-width: ${small}) {
    width: 100%;
  }
`;

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Please enter your email address.'),
  name: Yup.string().trim().required('Please enter your name.'),
  message: Yup.string().trim().required('Please enter your message.'),
});

const ReCaptchaContainer = styled.div``;

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const recaptchaRef = useRef();
  const { state } = useLocation();
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width <= Number.parseInt(small.replace('px', ''), 10);

  const sendEmail = async (values, { resetForm }) => {
    try {
      setSubmitting(true);

      const recaptchaValue = recaptchaRef.current.getValue();

      if (recaptchaValue) {
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
        toast.error('Please verify that you are not a robot', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (e) {
      toast.error(e.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setSubmitting(false);
      await recaptchaRef.current.reset();
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
    <Container>
      <Background
        $borderRadius={theme.borderRadius.default}
        $backgroundColor={theme.boxShadow}
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
          labelColor={isMobile && theme.key === 'mint' && theme.backgroundColor}
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
        labelColor={theme.key === 'mint' && theme.backgroundColor}
      />
      {process.env.REACT_APP_RECAPTCHA_KEY && (
        <ReCaptchaContainer>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
          />
        </ReCaptchaContainer>
      )}
      <ButtonContainer>
        <Button onClick={handleSubmit} loading={submitting} disabled={!isValid}>
          Send Message
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default ContactForm;
