import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const HouseholdProfileSchema = new Schema(
  {
    // id: HHprofileId
    accountId: { type: ObjectId, ref: 'Account', required: true },
    householdId: { type: ObjectId, ref: 'Household', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
// NOTE Virtual for the name
HouseholdProfileSchema.virtual('creator', {
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
