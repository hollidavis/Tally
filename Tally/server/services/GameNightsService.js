import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
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

  async removeGameNight(id) {
    const gameNight = await dbContext.GameNights.findByIdAndDelete(id)
    if (!gameNight) {
      throw new BadRequest('Invalid Id')
    }
    return gameNight
  }
}

export const gameNightsService = new GameNightsService()
