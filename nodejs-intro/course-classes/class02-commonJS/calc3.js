// CommonJS export - Declaring a function directly in the export clause
// Exporting functions individually

// First approach
// exports.sum3 = (n1, n2) => n1 + n2
// exports.sub3 = (n1, n2) => n1 - n2

// Second approach - index.js is kept unchanged
const sum3 = (n1, n2) => n1 + n2
const sub3 = (n1, n2) => n1 - n2

exports.sum3 = sum3
exports.sub3 = sub3

