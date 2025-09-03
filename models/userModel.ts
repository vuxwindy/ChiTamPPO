import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  address: String,
  chainId: Number,
  reward: Number,
  totalEarned: Number,
  createdAt: { type: Number },
  lastClaimedAt: { type: Number }
})

export default mongoose.models.User || mongoose.model('User', userSchema)
