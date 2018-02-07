import { CenturyTypes } from "./CenturyTypes";
import { Id } from "./common";

export namespace StoryTypes {
  export interface StoryTeacherFields {
    _id: Id;
    meta?: string;
  }

  export interface Teacher extends CenturyTypes.User, StoryTeacherFields {}
  export interface StoryUserFields {
    _id: Id;
    class: string;
  }

  export interface StoryClassFields {
    _id: Id;
    price: number;
  }
  export interface Class extends StoryClassFields, CenturyTypes.Class {}

  export interface StoryCourseFields {
    _id: Id;
    price: number;
  }

  export type Course = CenturyTypes.Course;
}
