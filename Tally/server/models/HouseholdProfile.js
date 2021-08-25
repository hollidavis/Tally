import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const HouseholdProfileSchema = new Schema(
  {
    accountId: { type: ObjectId, ref: 'Account', required: true },
    householdId: { type: ObjectId, ref: 'Household', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

HouseholdProfileSchema.virtual('profile', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

HouseholdProfileSchema.virtual('household', {
  localField: 'householdId',
  ref: 'Household',
  foreignField: '_id',
  justOne: true
})
