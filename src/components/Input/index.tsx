import React, {FC, memo, useMemo} from 'react';
import classes from './index.module.css';
import {IInput} from './types';

const Input: FC<IInput> = ({inputType, name, label, value, onChange}) => {
  const type = useMemo(() => {
    if (inputType === 'inputEmail') return 'email';
    if (inputType === 'inputPassword') return 'password';
    if (inputType === 'inputText') return 'text';
  }, [inputType]);

  const placeholder = useMemo(() => {
    if (inputType === 'inputEmail') return 'admin@user.com';
    if (inputType === 'inputPassword') return 'Введите пароль';
    if (inputType === 'inputText') return 'Введите текст';
  }, [inputType]);

  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.inputContainer}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.input}
        />
      </div>
    </div>
  );
};

export default memo(Input);
