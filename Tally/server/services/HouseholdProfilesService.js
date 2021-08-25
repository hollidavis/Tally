import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdProfilesService {
  /** creates new household profile object when a user joins a household
   * @param {Object} body - need the id of the household to be joined and the id of the profile of trying to join.
   * @param {String} accessKey - the access key to join the household
   * @returns new household profile object
  */
  async createHouseholdProfile(body, accessKey) {
    const household = await dbContext.Households.find(body.householdId)
    if (household.accessKey === accessKey) {
      const householdProfile = await dbContext.HouseholdProfiles.create(body)
      return await dbContext.HouseholdProfiles.find(householdProfile.id).populate('profile', 'name picture').populate('household', 'name')
    }
    throw new BadRequest('Failed to join household')
  }

  /**
  * deletes a household profile object. Used to "kick" a user out of a household
  * @param {Object} body - need the id of the household to be edited and the id of the profile to be kicked
  * @param {String} userId - id of the logged in user making the request
  * @returns successfully deleted message
  */
  async destroyHouseholdProfile(body, userId) {
    const household = await dbContext.Households.findById(body.householdId)
    if (household.ownerAccountId === userId) {
      await dbContext.HouseholdProfiles.findByIdAndDelete(body.id)
    } else {
      throw new Forbidden('This is not your household')
    }
    return 'Successfully Deleted'
  }

  /** Gets all the profiles in a household using provided household id
   * @param {String} householdId - the id of the household who's profiles are being requested
   * @returns array of household profile objects that have the provided householdId
  */
  async getProfilesByHouseholdId(householdId) {
    const profiles = await dbContext.HouseholdProfiles.find({ householdId: householdId }).populate('profile', 'name picture').populate('household', 'name')
    if (!profiles) {
      throw new BadRequest('Invalid Id')
    }
    return profiles
  }

  /** Gets all households the belonging to the user with provided account id
   * @param {String} accountId - the id of the person who's results you're trying to get
   * @returns array of household profile objects
   */
  async getHouseholdsByProfileId(accountId) {
    const households = await dbContext.HouseholdProfiles.find({ accountId: accountId }).populate('profile', 'name picture').populate('household', 'name')
    if (!households) {
      throw new BadRequest('Invalid Id')
    }
    return households
  }
}
export const householdProfilesService = new HouseholdProfilesService()
