export default function sorting<T, U = string | number>(
  array: T[],
  sort: boolean,
  key?: U
): T[] {
  const newArray = array.sort((a: any, b: any) =>
    key
      ? sort
        ? a[key] > b[key]
          ? -1
          : 1
        : a[key] > b[key]
        ? 1
        : -1
      : sort
      ? a > b
        ? -1
        : 1
      : a > b
      ? 1
      : -1
  );
  return newArray as T[];
}
type TestType = {
  id: number;
  name: string;
};
const arrayTest: TestType[] = [
  {
    id: 3,
    name: "Ferhat",
  },
  {
    id: 1,
    name: "John",
  },
  {
    id: 32,
    name: "Adam",
  },
  {
    id: 23,
    name: "Fatih",
  },
];
const make = sorting<TestType>(arrayTest, false, "id");

console.log(make);
