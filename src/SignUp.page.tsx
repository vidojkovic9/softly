import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Logo from './components/ImageComponents/Logo.icon';
import Input from './components/Input';
import './SignUp.style.scss';

const createPageCheckbox =
  'I hereby confirm that I have read and agree to the Terms&Conditions and Privacy Policy of Softly.';

const SignUp = () => {
  return (
    <div className="sign-up">
      <Logo width="210" height="150" />
      <p> CREATE </p>
      <form className="sign-up__form">
        <Input type="email" name="Email" />
        <Input type="password" name="Password" />
        <Input type="password" name="Repeat Password" />
        <div className="sign-up__form__checkbox">
          <Checkbox title={createPageCheckbox} />
        </div>
        <div className="sign-up__form__btn">
          <Button variant="primary" styleType="outline">
            GO
          </Button>
        </div>
        <div className="sign-up__login">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
