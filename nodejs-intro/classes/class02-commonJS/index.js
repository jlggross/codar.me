// CommonJS import from calc1.js - module.exports single function
const sum = require("./calc1.js")
console.log("calc1.js - sum: ", sum(10, 20))

// CommonJS import from calc2.js - module.exports multiple functions
const calc = require("./calc2.js")
console.log("calc2.js - sum: ", calc.sum(10, 20))
console.log("calc2.js - sub: ", calc.sub(10, 20))

// CommonJS import from calc3.js - Import functions individually
const { sum3, sub3 }  = require("./calc3.js")
console.log("calc3.js - sum: ", sum3(10, 20))
console.log("calc3.js - sum: ", sub3(10, 20))