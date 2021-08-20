import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async getAccountByHouseholdId(id) {
    const accounts = await dbContext.HouseholdProfiles.find({ householdId: id })
    if (!accounts) {
      throw new BadRequest('Invalid Id')
    }
    return accounts
  }

  async getHouseholdsByAccountId(id) {
    const households = await dbContext.HouseholdProfiles.find({ accountId: id })
    if (!households) {
      throw new BadRequest('Invalid Id')
    }
    return households
  }
}

export const householdProfilesService = new HouseholdProfilesService()
