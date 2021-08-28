import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'
import { householdsService } from './HouseholdsService'

class HouseholdProfilesService {
  async getProfilesByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/profiles')
    AppState.householdProfiles = res.data
  }

  async getHouseholdsByProfileId(id) {
    const res = await tallyApi.get('account/' + id + '/households')
    AppState.profileHouseholds = res.data
  }

  async joinHousehold(newHousehold) {
    const res = await tallyApi.post('api/householdprofiles', newHousehold)
    AppState.householdProfiles = res.data
    return AppState.householdProfiles

  }
}

export const householdProfilesService = new HouseholdProfilesService()
