import { CenturyTypes } from "./CenturyTypes";
import { Id } from "./Id";

export namespace StoryTypes {
  export interface Teacher extends CenturyTypes.User {
    meta: string;
  }

  export interface StoryClassFields {
    _id: Id;
    price: number;
    meta: string;
    teachers: Id[];
    courses: Id[];
  }
  export interface Class extends StoryClassFields, CenturyTypes.Class {}
}
