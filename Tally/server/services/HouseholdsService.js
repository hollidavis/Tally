import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class HouseholdsService {
  async getById(id) {
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
    const household = await this.getById(id)
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
    const household = await dbContext.Households.create(body)
    return await dbContext.Households.findById(household.id)
  }
}

export const householdsService = new HouseholdsService()
