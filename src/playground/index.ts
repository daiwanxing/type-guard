import { OptionalKeys, OptionalObject, RequiredKeys } from "..";

interface Duck {
  // 鸭子的名字
  name: string;

  // 鸭子的年龄
  age: number;

  sex?: string;

  // 鸭子的叫声
  quack(): void;

  // 鸭子游泳的方法
  swim(): void;

  // 鸭子飞行的方法
  fly(): void;
}

type Result = OptionalKeys<Duck>; // sex

type Resul2 = RequiredKeys<Duck>; // "name" | "age" | "quack" | "swim" | "fly"

type Resul3 = OptionalObject<Duck>; //  {sex?: string | undefined;}
