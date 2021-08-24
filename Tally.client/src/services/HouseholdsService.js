import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'

class HouseholdsService {
  async getHouseholdById(id) {
    console.log('You made it!')
    const res = await tallyApi.get('account/' + id + '/households')
    console.log(res)
    // AppState.activeProfile = res.data
  }
}

export const householdsService = new HouseholdsService()
