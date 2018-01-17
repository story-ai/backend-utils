import { Id } from "./common";

export namespace CenturyTypes {
  export interface User {
    _id: Id;
    personal: {
      ethnicity: { sdeCode: string };
      gender: string;
      name: {
        first: string;
        last: string;
      };
    };
    contact: {
      emails: {
        address: string;
        isVerified: boolean;
      }[];
    };
    profile: {
      avatar: string;
      groups: {
        roles: string[];
        organisations: {
          organisation: Id;
          classSettings: {
            class: Id;
            roles?: string[];
          }[];
          dependants: any[];
          roles: string[];
          studyGroups: Id[];
          classes: Id[];
        }[];
      };
      extra: any;
      grades: any[];
      ids: any[];
    };
  }

  export interface UnjoinedClass {
    _id: Id;
    name: string;
    organisation: Id;
    type: "custom" | "imported";
  }
  export interface Class extends UnjoinedClass {
    teachers: Id[];
    courses: Id[];
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

  export interface StudyGroup {
    _id: Id;
    organisation: Id;
    name: string;
    course: Id;
    class: Id;
    coursePlan: Id;
    isEnabled: boolean;
    isDefault: boolean;
    isTest: boolean;
    status: string;
    filters: {
      organisations: any[];
      users: any[];
      classes: Id[];
    };
  }
}
