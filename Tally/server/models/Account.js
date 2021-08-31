import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    coverImg: { type: String, default: 'https://2.bp.blogspot.com/-D3FAIkeC_O4/UwjPKN06kqI/AAAAAAAACDg/FaVCCTvE8t8/s1600/Color-+VIOLET+02.jpg' },
    householdId: { type: String }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
