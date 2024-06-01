type IsPartial<T, U extends keyof T> = {} extends Pick<T, U> ? true : false;

type IsRequired<T, U extends keyof T> = {} extends Pick<T, U> ? false : true;
