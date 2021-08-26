import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class HouseholdProfilesService {
  async getProfilesByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/profiles')
    console.log(res.data)
    AppState.householdProfiles = res.data
    console.log(AppState.games)
  }
}

export const householdProfilesService = new HouseholdProfilesService()