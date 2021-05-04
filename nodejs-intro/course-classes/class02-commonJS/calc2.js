const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2

// CommonJS export - For multiple functions we have to create an object
// that encapsulates the functions we want to export
const calc = { sum, sub }
module.exports = calc