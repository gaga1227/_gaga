// object rest spread operator here is beyond es6
// so need to use extra babel plugin to transpile
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

const age = 100;
const people = ['Wes', 'Kait'];

const fullNames = people.map(name => `${name} Bos`);

for(const person of people) {
  console.log('person', person);
}

