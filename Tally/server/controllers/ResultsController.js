import { Auth0Provider } from '@bcwdev/auth0provider'
import { resultsService } from '../services/ResultsService'
import BaseController from '../utils/BaseController'

export class ResultsController extends BaseController {
  constructor() {
    super('api/results')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllResults)
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const result = await resultsService.create(req.body)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async getAllResults(req, res, next) {
    try {
      const results = await resultsService.getAllResults()
      res.send(results)
    } catch (error) {
      next(error)
    }
  }
}
