import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  async createHouseholdProfile(body) {
    // NOTE line 7 not needed unless using populate
    // NOTE validate the code is the correct code for the household
    const householdProfile = await dbContext.HouseholdProfiles.create(body)
    return await dbContext.HouseholdProfiles.findById(householdProfile.id)
  }

  async destroyHouseholdProfile(body, userId) {
    const household = await dbContext.Households.findById(body.householdId)
    if (household.ownerAccountId === userId) {
      await dbContext.HouseholdProfiles.findByIdAndDelete(body.id)
    } else {
      throw new Forbidden('This is not your household')
    }
    return 'Successfully Deleted'
  }

  async getProfilesByHouseholdId(householdId) {
    const profiles = await dbContext.HouseholdProfiles.find({ householdId: householdId }).populate('creator', 'name picture')
    if (!profiles) {
      throw new BadRequest('Invalid Id')
    }
    return profiles
  }

  async getHouseholdsByProfileId(accountId) {
    const households = await dbContext.HouseholdProfiles.find({ accountId: accountId }).populate('household', 'name id')
    if (!households) {
      throw new BadRequest('Invalid Id')
    }
    return households
  }
}
export const householdProfilesService = new HouseholdProfilesService()
