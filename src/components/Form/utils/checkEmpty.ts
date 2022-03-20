import {GroupFieldsResult} from '../../GroupFields/types';

//function for check empty fields
// will return true if all fields not empty
export const checkEmpty = (result: GroupFieldsResult) => {
  const values = Object.values(result);
  return !values.some(item => item.length === 0);
};
