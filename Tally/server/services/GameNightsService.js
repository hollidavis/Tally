import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { householdProfilesService } from './HouseholdProfilesService'
class GameNightsService {
  /** Gets game night object by provided id
   * @param {String} id - the id of the game night
   * @returns game night object
   */
  async getGameNightById(id) {
    const gameNight = await dbContext.GameNights.findById(id)
    if (!gameNight.length) {
      throw new BadRequest('Invalid Id')
    }
    return gameNight
  }

  /** Creates game night with provided body
   * @param {Object} body - the details of the game night to be created
   * @returns new game night object
   */
  async createGameNight(body) {
    const gameNight = await dbContext.GameNights.create(body)
    return await dbContext.GameNights.findById(gameNight.id)
  }

  /** Adds a profile id to the game nights activeProfiles array. Players are only able to join if they belong to the household the game night is in.
   * @param {String} id - the id of the game night to be joined
   * @param {Object} body - profile of player trying to join
   * @returns updated game night object
   */
  async joinGameNight(id, body) {
    // Finds a game night with the provide id of the game night the player is trying to join
    const gameNight = await dbContext.GameNights.findById(id)
    // If no game night is found function throws error
    if (!gameNight.length) {
      throw new BadRequest('Invalid Id')
    }
    // Finds all household profiles that include the profileId of the person trying to join the game night
    const playerHouseholdProfiles = await householdProfilesService.getHouseholdsByProfileId(body.id)
    // Further filters the household profiles to find one that also has the householdId that is the same as the household Id on the game night
    const found = playerHouseholdProfiles.find(householdProfile => householdProfile.householdId === gameNight.householdId)
    // If no household profile is found then functions throws error
    if (!found) {
      throw new Forbidden('You are not a member of this household')
    }
    // If all tests pass then the profile id of the player trying to join is added to the game night. Updated game night is returned to the controller
    gameNight.activeProfiles.push(body.id)
    const updatedGameNight = await dbContext.GameNights.findByIdAndUpdate(id, gameNight, { new: true })
    return updatedGameNight
  }

  /** Deletes game night by provided id
   *  @param {String} id - the id of the game night to be deleted
   * @returns deleted game night object
   */
  async removeGameNight(id) {
    const gameNight = await dbContext.GameNights.findByIdAndDelete(id)
    if (!gameNight.length) {
      throw new BadRequest('Invalid Id')
    }
    return gameNight
  }
}

export const gameNightsService = new GameNightsService()
