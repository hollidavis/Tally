import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const ResultSchema = new Schema(
  {
    householdId: { type: ObjectId, ref: 'Household', required: true },
    gameApiId: { type: String, required: true },
    profileId: {type: ObjectId, ref: 'Account', required: true },
    win: { type: Boolean, required: true },
    // NOTE If you wish to add additional public properties for Results do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
ResultSchema.virtual('game', {
  localField: 'gameApiId',
  ref: 'Game',
  foreignField: 'gameApiId',
  justOne: true
})
ResultSchema.virtual('profile', {
  localField: 'profileId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})