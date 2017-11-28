export type Id = string;

export interface Result<T = any>
  extends Promise<{ statusCode: number; result: T }> {}

export interface Map<T = any> {
  [k: string]: T;
}
