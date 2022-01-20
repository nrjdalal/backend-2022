import userSchema, { validateUser } from '../../models/user.js'

export default (req, res) => {
  const userBody = validateUser(req.body)

  if (userBody.error) {
    return res.status(400).send(userBody)
  } else {
    return res.send('Creating a user')
  }
}
