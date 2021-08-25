import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'

class HouseholdsService {
  async getHouseholdById(id) {
    const res = await tallyApi.get('account/' + id + '/households')
    // AppState.activeProfile = res.data
  }
}

export const householdsService = new HouseholdsService()
