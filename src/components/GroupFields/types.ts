import {InputType} from '../Input/types';
import {Dispatch, SetStateAction} from 'react';

// types for GroupsFields component
interface IConfigField {
  type: InputType;
  label: string;
  defaultValue?: string;
}

export type ConfigFields = Record<string, IConfigField>;

export interface IConfigGroupFields {
  config: ConfigFields;
  values: GroupFieldsResult | undefined;
  onChange: Dispatch<SetStateAction<GroupFieldsResult | undefined>>;
}

// types for result of GroupsFields component
export type GroupFieldsResult = Record<string, keyof ConfigFields>;
