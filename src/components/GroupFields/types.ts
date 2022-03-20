import {InputType} from '../Input/types';

// types for GroupsFields component
interface IConfigField {
  type: InputType;
  label: string;
  defaultValue?: string;
}

export type ConfigFields = Record<string, IConfigField>;
export type onChangeGroupFields = (values: GroupFieldsResult) => void;

export interface IConfigGroupFields {
  config: ConfigFields;
  values: GroupFieldsResult | undefined;
  onChange: onChangeGroupFields;
}

// types for result of GroupsFields component
export type GroupFieldsResult = Record<string, keyof ConfigFields>;
