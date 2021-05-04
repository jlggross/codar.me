const fn = () => {
  throw new Error('Ops! Error!')
}

try {
  fn()
  console.log('Success.')
} catch (error) {
  console.log('----------', error)
}
