import Joi from 'joi'
import mongoose from 'mongoose'

export const validateUser = (body) => {
  const userSchema = Joi.object({
    username: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(40).required(),
  })

  const { error } = userSchema.validate(body)

  if (error) {
    return {
      status: false,
      error: error.details[0].message,
    }
  } else {
    return {
      status: true,
      data: 'The schema is valid.',
    }
  }
}

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

export default mongoose.model('User', userSchema)
