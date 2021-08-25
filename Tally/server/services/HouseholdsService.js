import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class HouseholdsService {
  /** Gets the household the logged in user owns. If they don't have a household it will create a new one.
   * @param {String} id - the logged in users id
   * @returns the household object the logged in owner uses
  */
  async getMyHousehold(id) {
    let myHousehold = await dbContext.Households.find({ ownerAccountId: id })
    if (!myHousehold.length) {
      myHousehold = await this.createHouseholdIfNeeded({ ownerAccountId: id })
    }
    return myHousehold
  }

  /** Gets household object using provided id
   * @param {String} id - the id of the household to be retrieved
   * @returns found household object
  */
  async getHouseholdById(id) {
    const household = await dbContext.Households.findById(id)
    if (!household.length) {
      throw new BadRequest('Invalid Id')
    }
    return household
  }

  /** Gets array of game objects that belong to a specific household
   * @param {String} id - id of the household who's games you're trying to find
   * @returns array of game objects
  */
  async getGamesByHouseholdId(id) {
    const games = await dbContext.Games.find({ householdId: id })
    if (!games.length) {
      throw new BadRequest('Invalid Id')
    }
    return games
  }

  /** Gets array of game night objects that belong to a specific household
   * @param {String} id - id of the household who's game nights you're trying to find
   * @returns array of game night objects
  */
  async getGameNightsByHouseholdId(id) {
    const gameNights = await dbContext.GameNights.find({ householdId: id })
    if (!gameNights.length) {
      throw new BadRequest('Invalid Id')
    }
    return gameNights
  }

  /** Gets array of result objects that belong to a specific household
   * @param {String} id - id of the household who's results you're trying to find
   * @returns array of result objects
  */
  async getResultsByHouseholdId(id) {
    const results = await dbContext.Results.find({ householdId: id })
    if (!results.length) {
      throw new BadRequest('Invalid Id')
    }
    return results
  }

  async editHousehold(id, body) {
    const household = await this.getHouseholdById(id)
    if (!household.length) {
      throw new BadRequest('Invalid Id')
    }
    if (household.ownerAccountId.toString() !== body.ownerAccountId) {
      throw new Forbidden('This is not your household')
    }
    const updatedHousehold = await dbContext.Households.findByIdAndUpdate(id, body, { new: true })
    return updatedHousehold
  }

  async createHouseholdIfNeeded(body) {
    const accessKey = await this.createAccessKey()
    body.accessKey = accessKey
    const household = await dbContext.Households.create(body)
    return await dbContext.Households.findById(household.id)
  }

  async createAccessKey() {
    const length = 5
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength))
    }
    return result
  }
}

export const householdsService = new HouseholdsService()
