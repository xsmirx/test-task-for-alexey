import {ConfigFields, GroupFieldsResult} from '../../GroupFields/types';

// function for validate all email fields.
// will return true if all email fields contain a valid email
export const validateEmails = (config: ConfigFields, result: GroupFieldsResult) => {
  const emailsFields = Object.keys(config).filter(item => config[item].type === 'inputEmail');
  return !emailsFields.some(
    item => !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(result[item])
  );
};
