type DPick<T, U extends keyof T> = {
  [k in U]: T[k];
};
