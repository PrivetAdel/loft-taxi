import React, {useCallback} from 'react';
import {Typography, InputLabel, Input, Link} from '@material-ui/core';
import {FormContainer} from './FormContainer';
import {Form} from './Form';
import {SubmitButton} from './SubmitButton';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {logIn} from '../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  label: {
    marginTop: theme.spacing(3)
  }
}));

const FormSignUp = ({onLogIn}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailChangeHandle = (evt) => {
    setEmail(evt.target.value);
  };

  const userNameChangeHandle = (evt) => {
    setUserName(evt.target.value);
  };

  const passwordChangeHandle = (evt) => {
    setPassword(evt.target.value);
  };

  const loginHandler = useCallback((email, password) => {
    dispatch(logIn(email, password));
  }, []);

  const signUpHandler = (evt) => {
    evt.preventDefault();
    loginHandler(email, password);
  };

  return (
    <FormContainer>
      <Typography className={classes.title} align="center" variant="h4">
        Регистрация
      </Typography>

      <Form onSubmitHandler={signUpHandler}>
        <InputLabel htmlFor="email" className={classes.label} >Email*</InputLabel>
        <Input
          type="text"
          id="email"
          value={email}
          placeholder="mail@mail.ru"
          onChange={emailChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="userName" className={classes.label} >Как вас зовут?*</InputLabel>
        <Input
          type="text"
          id="userName"
          value={userName}
          placeholder="Петр Александрович"
          onChange={userNameChangeHandle}
          fullWidth
          required />

        <InputLabel htmlFor="password" className={classes.label} >Придумайте пароль*</InputLabel>
        <Input
          type="text"
          id="password"
          value={password}
          placeholder="*************"
          onChange={passwordChangeHandle}
          fullWidth
          required />

        <SubmitButton>Зарегистрироваться</SubmitButton>

        <Typography color="textSecondary" align="center">
          Уже зарегестрированны? 
          <Link onClick={onLogIn} >
            Войти
          </Link>
        </Typography>
      </Form>
    </FormContainer>
  );
};

FormSignUp.propTypes = {
  onLogIn: PropTypes.func.isRequired
};

FormSignUp.defaultProps = {
  onLogIn: () => {}
};

export default FormSignUp;
