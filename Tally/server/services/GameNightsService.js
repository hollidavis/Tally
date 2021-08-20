import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { householdProfilesService } from './HouseholdProfilesService'
class GameNightsService {
  async getGameNightById(id) {
    const gameNight = await dbContext.GameNights.findById(id)
    if (!gameNight) {
      throw new BadRequest('Invalid Id')
    }
    return gameNight
  }

  async createGameNight(body) {
    const gameNight = await dbContext.GameNights.create(body)
    return await dbContext.GameNights.findById(gameNight.id)
  }

  async joinGameNight(id, body) {
    const gameNight = await dbContext.GameNights.findById(id)
    const playerHouseholds = await householdProfilesService.getHouseholdsByAccountId(body.id)
    if (!gameNight) {
      throw new BadRequest('Invalid Id')
    }
    if (playerHouseholds.householdId !== gameNight.householdId) {
      throw new Forbidden('You are not a member of this household!')
    }
    gameNight.activeProfiles.push(body.id)
    const updatedGameNight = await dbContext.GameNights.findByIdAndUpdate(id, gameNight, { new: true })
    return updatedGameNight
  }

  async removeGameNight(id) {
    const gameNight = await dbContext.GameNights.findByIdAndDelete(id)
    if (!gameNight) {
      throw new BadRequest('Invalid Id')
    }
    return gameNight
  }
}

export const gameNightsService = new GameNightsService()
