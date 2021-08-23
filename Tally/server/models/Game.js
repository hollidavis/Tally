import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    minPlayers: { type: Number, required: true },
    maxPlayers: { type: Number, required: true },
    smallImg: { type: String, required: true },
    largeImg: { type: String, required: true },
    minPlayTime: { type: Number, required: true },
    maxPlayTime: { type: Number, required: true },
    playerAge: { type: Number, required: true },
    websiteLink: { type: String, required: true },
    householdId: { type: ObjectId, ref: 'Household', required: true },
    gameApiId: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
