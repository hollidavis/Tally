import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { accountService } from './AccountService'
import { tallyApi } from './AxiosService'

class HouseholdsService {
  async getHouseholdById(id) {
    const res = await tallyApi.get('account/' + id + '/myhousehold')
    AppState.myHousehold = res.data[0]
    await accountService.getAccount()
    console.log('from household service', AppState.myHousehold)
  }
}

export const householdsService = new HouseholdsService()
