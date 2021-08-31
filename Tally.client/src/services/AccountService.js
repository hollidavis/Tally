import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'
import { profilesService } from './ProfilesService'

class AccountService {
  async getAccount() {
    try {
      const res = await tallyApi.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateAccount(obj, id) {
    const res = await tallyApi.put('/account/' + id, obj)
    AppState.account = res.data
    AppState.activeProfile = res.data
  }
}

export const accountService = new AccountService()
