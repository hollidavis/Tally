import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { tallyApi } from './AxiosService'

class ProfilesService {
  async getProfileById(id) {
    const res = await tallyApi.get('account/' + id)
    return res.data
  }
}

export const profilesService = new ProfilesService()
