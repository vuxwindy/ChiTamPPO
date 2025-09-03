import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
  address: String,
  chainId: Number,
  task: String,
  createdAt: { type: Number }
})

export default mongoose.models.Task || mongoose.model('Task', taskSchema)
