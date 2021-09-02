import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GameSchema } from '../models/Game'
import { GameNightSchema } from '../models/GameNight'
import { HouseholdSchema } from '../models/Household'
import { HouseholdProfileSchema } from '../models/HouseholdProfile'
import { ResultSchema } from '../models/Result'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Households = mongoose.model('Household', HouseholdSchema);
  HouseholdProfiles = mongoose.model('HouseholdProfile', HouseholdProfileSchema);
  Games = mongoose.model('Game', GameSchema);
  GameNights = mongoose.model('GameNight', GameNightSchema);

  Results = mongoose.model('Result', ResultSchema);
}

export const dbContext = new DbContext()
