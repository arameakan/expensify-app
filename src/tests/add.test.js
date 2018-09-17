const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add to values", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should check greeting", () => {
  const result = generateGreeting("Aram");
  expect(result).toBe(`Hello Aram!`);
});

test("should check greeting", () => {
  const result = generateGreeting();
  expect(result).toBe(`Hello Anonymous!`);
});
