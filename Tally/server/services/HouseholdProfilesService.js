import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async createHouseholdProfile(body) {
    // NOTE line 7 not needed unless using populate
    // NOTE validate the code is the correct code for the household
    const householdProfile = await dbContext.HouseholdProfiles.create(body)
    return await dbContext.HouseholdProfiles.findById(householdProfile.id)
  }

  async destroyHouseholdProfile(id, userId) {
    const profile = await dbContext.HouseholdProfiles.findOneAndDelete({ accountId: userId, _id: id })
    return profile
  }
}

export const householdProfilesService = new HouseholdProfilesService()
