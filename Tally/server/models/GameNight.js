import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GameNightSchema = new Schema(
  {
    householdId: { type: ObjectId, ref: 'Household', required: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    activeProfiles: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
