// Named Export
// can have multiple
export const apiKey = 'abc123';
export const url = 'http://wesbos.com';
export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

// export multiple variables once
const age = 100;
const dog = 'snickers';
export { age as old, dog };
