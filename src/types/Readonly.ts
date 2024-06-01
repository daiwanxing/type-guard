type DReadonly<T> = {
  readonly [Property in keyof T]: T[Property];
};
