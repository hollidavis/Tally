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

  async getHouseholdByAccessKey(accessKey) {
    const res = await tallyApi.get('api/households/' + accessKey + '/accesskey')
    AppState.activeHousehold = res.data
    return AppState.activeHousehold
  }

  async respinAccessKey(id) {
    const res = await tallyApi.put('api/households/' + id + '/accessKey')
    AppState.activeHousehold.accessKey = res.data
    return res.data.accessKey
  }

  async updateHouseholdName(body, id) {
    const res = await tallyApi.put('api/households/' + id, body)
    AppState.activeHousehold = res.data
  }

  async deleteMember(body, accountId) {
    const res = await tallyApi.delete('api/')
  }
}
export const householdsService = new HouseholdsService()
