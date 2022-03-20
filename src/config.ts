import {ConfigFields} from './components/GroupFields/types';

export const config: ConfigFields = {
  email: {type: 'inputEmail', label: 'Email'},
  password: {type: 'inputPassword', label: 'Password', defaultValue: '123456'},
  text: {type: 'inputText', label: 'Some text', defaultValue: 'default text'},
};
