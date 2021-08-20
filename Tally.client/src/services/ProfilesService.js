import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfilesService {
  async getProfileById(id) {
    const res = await api.get('account/' + id)
    AppState.activeProfile = res.data
    logger.log('from service', AppState.activeProfile)
  }
}

export const profilesService = new ProfilesService()
