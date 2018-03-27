import { CenturyTypes } from "./CenturyTypes";
import { Id } from "./common";

export namespace StoryTypes {
  export interface StoryTeacherFields {
    _id: Id;
    meta?: string;
  }

  export interface Discount {
    _id: Id;
    value: number;
    name: string;
  }

  export interface Teacher extends CenturyTypes.User, StoryTeacherFields {}
  export interface StoryUserFields {
    _id: Id;
    class: string;
    discounts: StoryTypes.Discount[];
    referral_code: string;
  }

  export interface StoryClassFields {
    _id: Id;
    price: number;
  }
  export interface Class extends StoryClassFields, CenturyTypes.Class {}

  export interface StoryCourseFields {
    _id: Id;
    price: number;
    name?: string;
    order?: number;
  }

  export type Course = CenturyTypes.Course;
}
