import mongoose from 'mongoose'

export const connect = async (env) => {
  try {
    await mongoose.connect(env)
    console.log('MongoDB Connection successful')
  } catch (error) {
    console.log(error)
  }
}
