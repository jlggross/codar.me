const UserModel = require('./model')

const list = async (req, res) => {
  const users = await UserModel.find({})
  res.write(JSON.stringify(users))
  res.end()
}

const save = (req, res) => {
  let body = []
  req.on('data', (chunk) => {
    body.push(chunk)
  })

  req.on('end', async () => {
    body = Buffer.concat(body).toString()
    body = body
      .split('&')
      .map((item) => item.split('='))
      .reduce(
        (memo, current) => ({
          ...memo,
          [current[0]]: current[1],
        }),
        {}
      )

    const user = new UserModel(body)
    await user.save()
    res.write(JSON.stringify(user))
    res.end()
  })
}

module.exports = { list, save }
