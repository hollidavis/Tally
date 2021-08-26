import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class HouseholdProfilesService {
  async getProfilesByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/profiles')
    AppState.householdProfiles = res.data
  }
}

export const householdProfilesService = new HouseholdProfilesService()
