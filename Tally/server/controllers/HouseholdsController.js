import { Auth0Provider } from '@bcwdev/auth0provider'
import { householdsService } from '../services/HouseholdsService'
import BaseController from '../utils/BaseController'

export class HouseholdsController extends BaseController {
  constructor() {
    super('api/households')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
  }
}
