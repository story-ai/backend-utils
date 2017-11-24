import { Id } from "./Id";

export namespace CenturyTypes {
  export interface User {
    _id: Id;
    personal: {
      ethnicity: any;
      gender: string;
      name: any;
    };
    profile: {
      avatar: string;
      groups: {
        roles: string[];
      };
      extra: any;
      grades: any[];
      ids: any[];
    };
  }

  export interface Class {
    _id: Id;
  }

  export interface Course {
    _id: Id;
    name: string;
    description: string;
    history: {
      firstVersion: {
        createdBy: Id;
        createdAt: Date;
      };
      thisVersion: {
        prevId: Id;
        updatedBy: Id;
        updatedAt: Date;
        version: number;
        isDeprecated: boolean;
      };
    };
    isEnabled: boolean;
    isTest: boolean;
    isPublished: boolean;
    isPublic: boolean;
    labels: Id[];
    strands: {
      name: string;
      nuggets: Id[];
      weight: number;
      id: Id;
    }[];
    gradingStructure: Id;
    type: string;
    level: Id;
    subject: Id;
    icon: Id;
    organisation: Id;
    isAssignable: boolean;
  }
}
