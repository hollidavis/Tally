import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GameSchema = new Schema(
  {
    householdId: { type: ObjectId, ref: 'Household', required: true },
    gameApiId: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
