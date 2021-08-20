import { dbContext } from '../db/DbContext'

class ResultsService {
  async getAllResults(query = {}) {
    const results = await dbContext.Results.find(query)
    return results
  }

  async create(body) {
    const result = await dbContext.Results.create(body)
    return result
  }
}

export const resultsService = new ResultsService()
