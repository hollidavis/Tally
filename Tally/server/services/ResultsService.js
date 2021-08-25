import { dbContext } from '../db/DbContext'

class ResultsService {
  async getAllResults(query = {}) {
    const results = await dbContext.Results.find(query).populate('profile', 'name picture').populate('game', 'name')
    return results
  }

  async create(body) {
    const result = await dbContext.Results.create(body)
    return await dbContext.Results.find(result.id).populate('profile', 'name picture').populate('game', 'name')
  }
}

export const resultsService = new ResultsService()
