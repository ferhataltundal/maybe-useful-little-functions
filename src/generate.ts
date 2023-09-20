export default function generate(
  length: number,
  type: "number" | "string" | "both",
  options?: {
    specialCharacter?: boolean;
    customCharacter?: string;
  }
) {
  if (options?.customCharacter?.length === 0) {
    throw new Error("Invalid Property!");
  }
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "abcdefghijklmnopqrstuvwxyz";
  let c = "1234567890";
  let d = "!@#$%^&*()_+=[]{}|:;<>,.?/~`";
  const query =
    type === "number"
      ? c
      : type === "string"
      ? a + b
      : type === "both"
      ? a + b + c
      : "";

  const query2 = options?.specialCharacter ? query + d : query;
  let merge = options?.customCharacter
    ? query2 + options?.customCharacter
    : query2;
  let value = "";

  for (let i = 0; i < length; i++) {
    value += merge.charAt(Math.floor(Math.random() * merge.length));
  }

  return value;
}

const generateRandomString = generate(10, "string", {
  specialCharacter: false,
  customCharacter: "*",
});
console.log(generateRandomString);
