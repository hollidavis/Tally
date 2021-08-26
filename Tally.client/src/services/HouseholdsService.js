import { AppState } from '../AppState'
import { accountService } from './AccountService'
import { tallyApi } from './AxiosService'

class HouseholdsService {
  async getMyHouseholdById(id) {
    const res = await tallyApi.get('account/' + id + '/myhousehold')
    AppState.myHousehold = res.data
    await accountService.getAccount()
  }

  async getHouseholdById(id) {
    const res = await tallyApi.get('api/households/' + id)
    console.log(res.data)
    AppState.activeHousehold = res.data
  }
}

export const householdsService = new HouseholdsService()
