import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    maxPlayer: { type: Number, required: true },
    minPlayer: { type: Number, required: true },
    gameImg: { type: String, required: true },
    playTime: { type: Number, required: true },
    playerAge: { type: Number, required: true },
    websiteLink: { type: String, required: true },
    householdId: { type: ObjectId, ref: 'Household', required: true },
    gameApiId: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
