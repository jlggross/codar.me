function isValid(operator) {
  const operators = ['+', '-', '*', '/', '%']
  if (!operator) {
    return "Please, type a valid operator."  
  } 
  if (operators.includes(operator)) {
    return `Operator ${operator} is valid.`
  } else {
    return `Operator ${operator} is not valid.`
  }
}

export default isValid
export { isValid }