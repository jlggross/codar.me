// ESM - ES Modules - EcmaScript Modules

// calc1.js import - Import default export
import calc1 from "./calc1.js"

// calc1.js import - Import named exports
import { sum, sub } from "./calc1.js"

// We could make all import in a single line
//import calc1, { sum, sub } from "./calc1.js"

console.log("calc1.js - sum: ", calc1.sum(10, 10))
console.log("calc1.js - sub: ", calc1.sub(10, 10))

console.log("calc1.js - sum: ", sum(10, 10))
console.log("calc1.js - sub: ", sub(10, 10))

// calc1.js import - Import named exports using 'as'
import { sum as sum2, sub as sub2 } from "./calc1.js"
console.log("calc1.js - sum2: ", sum2(10, 10))
console.log("calc1.js - sub2: ", sub2(10, 10))

// Re-exporting all functions from calc1.js
import * as allFuncs from './calc1.js'
export default allFuncs