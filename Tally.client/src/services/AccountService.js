import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await tallyApi.get('/account')
      AppState.account = res.data
      console.log(AppState.account, 'appstate account in service')
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
