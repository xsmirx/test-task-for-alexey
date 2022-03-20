import {ChangeEventHandler} from 'react';

export type InputType = 'inputText' | 'inputEmail' | 'inputPassword';

export interface IInput {
  inputType: InputType;
  name: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
