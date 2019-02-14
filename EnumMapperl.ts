

export class EnumMpapper<T extends Object> {

  constructor() {}

  getEnumAsString(o: T, key: string | number): string {
    let ret: string = undefined;
    if (typeof key === 'string') {
      if (typeof((o as T)[(o  as T)[key]]) !== 'undefined') {
        ret = (o as T)[(o  as T)[key]];
      }
    } else if (typeof key === 'number') {
      if (typeof((o as T)[key]) !== 'undefined') {
        ret = (o as T)[key];
      }
    } else {
      throw new Error(`Unable to parse enum from ${typeof(key)}`);
    }
    if (ret) {
      return ret;
    } else {
      throw new Error(`Incorrect key passed: ${key}
      \nExpected one of following:\n${Object.keys(o).slice(Object.keys(o).length / 2, Object.keys(o).length).map(k => k + '\n')}`);
    }
  }

   getEnumAsNumber(o: T, key: string | number): number {
    if (typeof key === 'string') {
      if (typeof((o as T)[key]) !== 'undefined') {
        return (o as T)[key];
      } else {
        throw new Error(`Incorrect key passed: ${key}
        \nExpected one of following:\n${Object.keys(o).slice(Object.keys(o).length / 2, Object.keys(o).length).map(k => k + '\n')}`);
      }
    } else if (typeof key === 'number') {
      if (typeof((o as T)[key]) !== 'undefined') {
        return (o as T)[(o as T)[key]];
      } else {
        throw new Error(`Incorrect index passed: ${key}, max expected is ${(Object.keys(o).length / 2) - 1}`);
      }
    } else {
      throw new Error(`Unable to parse enum from ${typeof(key)}, string or number is expected`);
    }
  }
}
