const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2

const calc = { sum, sub }

// ESM - Default export
export default calc

// ESM - Named export
export { sum, sub }

