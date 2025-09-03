import mongoose from 'mongoose'

// Make sure the username, password, and database name are correct and the user has access.
// Example: If your user is 'admin' with password 'mongo' and has access to 'ppo', this should work.
// Otherwise, update the credentials accordingly.
const MONGODB_URI = process.env.MONGODB_URI || ''

export const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      console.log('MONGODB_URI is not defined');
      return
    }
    console.log('Connecting to MongoDB...')
    await mongoose.connect(MONGODB_URI, { authSource: 'admin' })
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}
