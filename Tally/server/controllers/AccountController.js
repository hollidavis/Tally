import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { householdsService } from '../services/HouseholdsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id', this.getProfileById)
      .get('/results', this.getResultsByProfileId)
      .get('/households', this.getHouseholdsByProfileId)
      .put('/:id', this.edit)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getProfileById(req, res, next) {
    try {
      const profile = await accountService.getProfileById(req.userInfo.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getResultsByProfileId(req, res, next) {
    try {
      const results = await accountService.getResultsByProfileId(req.userInfo.id)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }

  // NOTE maybe remove?
  async getHouseholdsByProfileId(req, res, next) {
    try {
      const profileHouseholds = await householdsService.getHouseholdsByProfileId({ ownerAccountId: req.userInfo.id })
      res.send(profileHouseholds)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const account = await accountService.edit(req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
