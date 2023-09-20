export function createMap<T, U>(
  key: U | U[],
  value: T | T[any]
): Map<typeof key, typeof value> {
  const map: Map<typeof key, typeof value> = new Map();
  return map.set(key, value);
}

export function callMap<T extends unknown, U>(
  map: Map<typeof key, any>,
  key: U | U[]
): Map<unknown, T | T[]> {
  return map.get(key);
}

export function hasKey<U>(map: Map<typeof key, any>, key: U | U[]): boolean {
  return map.has(key);
}

export function deleteMap<U>(map: Map<typeof key, any>, key: U | U[]): any {
  return map.delete(key);
}

const datas = {
  name: "1_TEST",
  surname: "2_TEST",
};

const myMap1 = createMap("1", Object.assign(datas));
console.log(callMap(myMap1, "1"));
console.log(hasKey(myMap1, "1"));
console.log(deleteMap(myMap1, "1"));
