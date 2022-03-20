import React, {FC, FormEventHandler, memo, useCallback, useRef, useState} from 'react';
import GroupFields from '../GroupFields';
import {GroupFieldsResult, onChangeGroupFields} from '../GroupFields/types';
import {config} from '../../config';
import classes from './index.module.css';
import {checkEmpty} from './utils/checkEmpty';
import {validateEmails} from './utils/validateEmails';

const Form: FC = () => {
  const [result, setResult] = useState<GroupFieldsResult>();

  const resultRef = useRef<GroupFieldsResult>();
  resultRef.current = result;

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    event => {
      event.preventDefault();
      alert(JSON.stringify(resultRef.current, null, 2));
    },
    [resultRef]
  );

  const onChange = useCallback<onChangeGroupFields>(values => {
    setResult(values);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <GroupFields config={config} values={result} onChange={onChange} />
      <div className={classes.buttonContainer}>
        {result && (
          <button
            type="submit"
            disabled={!(checkEmpty(result) && validateEmails(config, result))}
            className={classes.submitButton}
          >
            Войти
          </button>
        )}
      </div>
    </form>
  );
};

export default memo(Form);
