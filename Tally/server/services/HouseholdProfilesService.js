import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async getProfilesByHouseHoldId(query = {}) {
    const householdProfiles = await dbContext.HouseholdProfiles.find(query).populate('accountId')
    if (!householdProfiles) {
      throw new BadRequest('Invalid Id')
    }
    return householdProfiles
  }

  async createHouseholdProfile(body) {
    const householdProfile = await dbContext.HouseholdProfiles.create(body)
    return await dbContext.HouseholdProfiles.findById(householdProfile.id)
  }
}

export const householdProfilesService = new HouseholdProfilesService()
