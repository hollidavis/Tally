import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class GamesService {
  async getGameById(id) {
    const game = await dbContext.Games.findById(id)
    if (!game) {
      throw new BadRequest('Invalid Id')
    }
    return game
  }

  async createGame(body) {
    // REVIEW maybe change name of this function to addgame
    const game = await dbContext.Games.create(body)
    return await dbContext.Games.findById(game.gameApiId)
  }

  async removeGame(id) {
    const game = await dbContext.Games.findByIdAndDelete(id)
    if (!game) {
      throw new BadRequest('Invalid Id')
    }
    return game
  }
}

export const gamesService = new GamesService()
