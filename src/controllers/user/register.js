import userSchema, { validateUser } from '../../models/user.js'

export default async (req, res) => {
  // validating submitted data
  const valid = validateUser(req.body)
  if (valid.error) {
    return res.status(400).send(valid)
  } else {
    // check if the username already exists
    let exist = await userSchema.findOne({ username: req.body.username })
    if (exist) {
      return res.status(400).send({
        status: false,
        error: 'Email or username already exists, log in instead!',
      })
    }
    // check if the email already exists
    exist = await userSchema.findOne({ email: req.body.email })
    if (exist) {
      return res.status(400).send({
        status: false,
        error: 'Email or username already exists, log in instead!',
      })
    }
    // register the new user
    return await userSchema.create(req.body).then((response) =>
      res.send({
        status: true,
        data: 'User is successfully created, please proceed to login!',
      })
    )
  }
}
