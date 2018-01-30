import { CenturyTypes } from "./CenturyTypes";
import { Id } from "./common";

export namespace StoryTypes {
  export interface StoryTeacherFields {
    _id: Id;
    meta?: string;
  }
  export interface Teacher extends CenturyTypes.User, StoryTeacherFields {}

  export interface StoryClassFields {
    _id: Id;
    price: number;
    meta: string;
    // teachers: Id[];
    // courses: Id[];
  }
  export interface Class extends StoryClassFields, CenturyTypes.Class {}

  export interface StoryCourseFields {
    _id: Id;
    price: number;
  }

  export type Course = CenturyTypes.Course;
}
