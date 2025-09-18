import mongoose from 'mongoose'
const { Schema } = mongoose

const refSchema = new Schema({
  address: String,
  refAddress: { type: String, default: null },
  createdAt: { type: Number }
})

export default mongoose.models.Ref || mongoose.model('Ref', refSchema)
