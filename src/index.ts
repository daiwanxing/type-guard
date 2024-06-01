interface Duck {
  name: "duck";
  fur: "yellow";
  age?: 2;
}

type Result = DPick<Duck, "name" | "fur">;

type Result2 = DExclude<keyof Duck, "name">;

type Myfoo = any & never;

type MyBar = MyPartial<Duck>;

type MyBarFoo = OptionalObject<Duck>;

type Bro = IsPartial<Duck, "age">;

type ReadonlyDuck = DReadonly<Duck>;

type RequiredDuck = RequiredKeys<Duck>;
