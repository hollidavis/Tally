import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const HouseholdSchema = new Schema(
  {
    ownerAccountId: { type: ObjectId, ref: 'Account', required: true },
    name: { type: String, required: true, default: 'My Household' },
    accessKey: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
