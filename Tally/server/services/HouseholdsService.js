import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class HouseholdsService {
  async getHouseholdsByProfileId(query = {}) {
    const households = await dbContext.Households.find(query)
    if (!households.length) {
      // TODO check for this error handling on other functions and add .length
      throw new BadRequest('Invalid Id')
      // NOTE add function to createHouseholdIfNeeded
    }
    return households
  }

  async getHouseholdById(id) {
    const household = await dbContext.Households.findById(id)
    if (!household) {
      throw new BadRequest('Invalid Id')
    }
    return household
  }

  async getGamesByHouseholdId(id) {
    const games = await dbContext.Games.find({ householdId: id })
    if (!games) {
      throw new BadRequest('Invalid Id')
    }
    return games
  }

  async getGameNightsByHouseholdId(id) {
    const gameNights = await dbContext.GameNights.find({ householdId: id })
    if (!gameNights) {
      throw new BadRequest('Invalid Id')
    }
    return gameNights
  }

  async getResultsByHouseholdId(id) {
    const results = await dbContext.Results.find({ householdId: id })
    if (!results) {
      throw new BadRequest('Invalid Id')
    }
    return results
  }

  async editHousehold(id, body) {
    const household = await this.getHouseholdById(id)
    if (!household) {
      throw new BadRequest('Invalid Id')
    }
    if (household.ownerAccountId.toString() !== body.ownerAccountId) {
      throw new Forbidden('This is not your household')
    }
    const updatedHousehold = await dbContext.Households.findByIdAndUpdate(id, body, { new: true })
    return updatedHousehold
  }

  async createHousehold(body) {
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
