import { dbContext } from '../db/DbContext'

class ResultsService {
  /** creates new result object using provided body
   * @param {Object} body - includes details of results object to be created
   * @returns new result object
  */
  async createResult(body) {
    const result = await dbContext.Results.create(body)
    return await dbContext.Results.find(result.id).populate('profile', 'name picture').populate('game', 'name')
  }

  /** Gets all result objects in data base. Not currently used but keeping for potential future use
 * @returns array of all result objects in database
*/
  async getAllResults() {
    const results = await dbContext.Results.find().populate('profile', 'name picture').populate('game', 'name')
    return results
  }
}

export const resultsService = new ResultsService()
