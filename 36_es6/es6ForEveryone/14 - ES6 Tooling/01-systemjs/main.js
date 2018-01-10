// import a npm module with 'npm:' prefix for SystemJs
// SystemJs goes to npm registry and loads npm modules
import { sum, kebabCase } from 'npm:lodash';

// import local module
import { addTax } from './checkout';

// will see the logs after SystemJs transpiling, which takes some time
console.log(kebabCase('Wes is soooo cool ⛓⛓⛓⛓'));
console.log(addTax(100, 0.15));
