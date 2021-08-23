import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async createHouseholdProfile(body) {
    const householdProfile = await dbContext.HouseholdProfiles.create(body)
    return await dbContext.HouseholdProfiles.findById(householdProfile.id)
  }

  async destroyHouseholdProfile(id, userId) {
    const profile = await dbContext.HouseholdProfiles.findOneAndDelete({ accountId: userId, _id: id })
    return profile
  }
}

export const householdProfilesService = new HouseholdProfilesService()
