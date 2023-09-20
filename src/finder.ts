type DeeperType<T = unknown> = {
  data: T;
  info?: {
    message: string;
    result: boolean;
  };
};

export default function deeper<T>(
  array: T[],
  key: string | number,
  search: string | number,
  case_sensitivity: boolean,
  messages?: {
    successful?: string;
    unsuccessful?: string;
  }
): DeeperType<T>[] {
  let result: boolean = false;
  let message: string = "";
  function searchValue(value: any[typeof key]): boolean {
    const caseSensitivityControl = !case_sensitivity
      ? String(value[key]).toLowerCase() === String(search).toLowerCase()
      : String(value[key]) === String(search);
    if (caseSensitivityControl) {
      result = true;
      message = messages?.successful || "SUCCESFULLY!";
      return result;
    } else {
      result = false;
      message = messages?.unsuccessful || "DATA NOT FOUND!";
      return result;
    }
  }
  return [
    {
      ...{ data: (array.find(searchValue) as T[]) || [] },
      ...{ info: { message, result } },
    },
  ] as DeeperType<T>[];
}

const dummyValue = [
  {
    id: 1,
    name: "Ferhat",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Miller",
  },
];

const result = deeper(dummyValue, "id", 2, true, {
  successful: "User exist!",
  unsuccessful: "User not found!",
});
console.log(result);
