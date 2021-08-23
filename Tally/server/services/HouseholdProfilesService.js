import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async createHouseholdProfile(id) {
    // NOTE line 7 not needed unless using populate
    // NOTE validate the code is the correct code for the household
    return await dbContext.HouseholdProfiles.findById(id)
  }

  async destroyHouseholdProfile(id, userId) {
    const profile = await dbContext.HouseholdProfiles.findOneAndDelete({ accountId: userId, _id: id })
    return profile
  }
}

export const householdProfilesService = new HouseholdProfilesService()
