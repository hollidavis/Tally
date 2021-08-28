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
    AppState.activeHousehold = res.data
  }

  async updateHouseholdName(body, id) {
    const res = await tallyApi.put('api/households/' + id, body)
    AppState.activeHousehold = res.data
    console.log('don worry BOUT IT')
  }
}

export const householdsService = new HouseholdsService()
