import React, {FC} from 'react';
import classes from './App.module.css';
import Form from './components/Form';

const App: FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Авторизация</h1>
      <p className={classes.subtitle}>
        Для доступа к личному кабинету вашей компании авторизируйтесь на сайте
      </p>
      <Form />
    </div>
  );
};

export default App;
