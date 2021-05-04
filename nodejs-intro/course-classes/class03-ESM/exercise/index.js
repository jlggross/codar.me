import isValid from './validation.js'
import { isValid as isValid2 } from './validation.js'

const tests = ['', '-', '+', true, false, -10, 'lala', 100, '%']
console.log("Test for 'isValid' with default export/import:")
for (let i in tests) {
  console.log(`${i} : ${tests[i]} : ${isValid(tests[i])}`)
}

console.log("\nTest for 'isValid' with named export/import:")
for (let i in tests) {
  console.log(`${i} : ${tests[i]} : ${isValid2(tests[i])}`)
}