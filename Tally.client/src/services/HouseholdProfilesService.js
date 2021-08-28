import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'
import { householdsService } from './HouseholdsService'

class HouseholdProfilesService {
  async getProfilesByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/profiles')
    AppState.householdProfiles = res.data
  }

  async joinHousehold(newHouseHold) {
    const res = await tallyApi.post('api/householdprofiles', newHouseHold)
    return res.data
  }
}

export const householdProfilesService = new HouseholdProfilesService()
