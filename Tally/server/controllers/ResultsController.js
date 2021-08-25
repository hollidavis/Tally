import { Auth0Provider } from '@bcwdev/auth0provider'
import { resultsService } from '../services/ResultsService'
import BaseController from '../utils/BaseController'

export class ResultsController extends BaseController {
  constructor() {
    super('api/results')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllResults)
      .post('', this.createResult)
  }

  /** creates new result object using provided body */
  async createResult(req, res, next) {
    try {
      const result = await resultsService.createResult(req.body)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  /** Gets all result objects in data base. Not currently used but keeping for potential future use */
  async getAllResults(req, res, next) {
    try {
      const results = await resultsService.getAllResults()
      res.send(results)
    } catch (error) {
      next(error)
    }
  }
}
