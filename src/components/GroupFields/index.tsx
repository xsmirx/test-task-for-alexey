import React, {ChangeEventHandler, FC, memo, useCallback, useEffect, useMemo, useRef} from 'react';
import {GroupFieldsResult, IConfigGroupFields} from './types';
import Input from '../Input';

const GroupFields: FC<IConfigGroupFields> = ({config, values, onChange}) => {
  const inputNames = useMemo(() => Object.keys(config), [config]);

  useEffect(() => {
    const resultObj: GroupFieldsResult = {};
    inputNames.forEach(item => {
      resultObj[item] = config[item].defaultValue || '';
    });
    onChange(resultObj);
  }, [inputNames, config, onChange]);

  const valuesRef = useRef<GroupFieldsResult>();
  valuesRef.current = values;

  const onChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>(
    event => {
      const name = event.target.name;
      const value = event.target.value;
      onChange({...valuesRef.current, [name]: value});
    },
    [valuesRef, onChange]
  );

  return (
    <>
      {values && (
        <div>
          {inputNames.map(item => {
            return (
              <Input
                key={item}
                label={config[item].label}
                name={item}
                inputType={config[item].type}
                value={values[item]}
                onChange={onChangeInput}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default memo(GroupFields);
