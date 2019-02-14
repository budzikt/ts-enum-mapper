# ts-enum-mapper
Emum mapping utility for TS

## Simple and non-effective way of mapping TS enums back and forth  

Use as static field of your classes when needed constantly via program lifecycle:

```
export enum TestEnum {
  ONE = 'ONE',
  TWO = 'TWO'
}

static mapper<typeof TestEnum> = new EnumMpapper<typeof TestEnum>();

let enumEntry: TestEnum = TestEnum.ONE;

let res: string = mapper.getEnumAsString(TestEnum, 'ONE');
let res: string = mapper.getEnumAsString(TestEnum, 0);
let res: string = mapper.getEnumAsString(TestEnum, enumEntry);
let res: number = mapper.getEnumAsNumber(TestEnum, enumEntry);
```


Idea was inspired and generously supported by this [Stack question](https://stackoverflow.com/questions/48907599/typescript-mapping-enum) with awesome support of [Titian Cernicova-Dragomir](https://stackoverflow.com/users/125734/titian-cernicova-dragomir)
