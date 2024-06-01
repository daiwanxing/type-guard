/**
 * @description 找出对象中所有可选属性的键名
 */
type OptionalKeys<T> = {
  [k in keyof T]-?: IsPartial<T, k> extends true ? k : never;
}[keyof T];

/**
 * @description 找出对象中所有可选属性的键和值
 */
type OptionalObject<T> = {
  [k in keyof T as IsPartial<T, k> extends true ? k : never]: T[k];
};

/**
 * @description 找出对象中所有必选属性的键名
 */
type RequiredKeys<T> = {
  [k in keyof T]-?: IsRequired<T, k> extends true ? k : never;
}[keyof T];

/**
 * @description 找出对象中所有必选属性的键和值
 */
type RequiredObject<T> = {
  [k in keyof T as IsRequired<T, k> extends true ? k : never]-?: T[k];
};
