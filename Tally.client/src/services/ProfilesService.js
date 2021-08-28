import { tallyApi } from './AxiosService'

class ProfilesService {
  async getAccountById(id) {
    const res = await tallyApi.get('account/' + id)
    return res.data
  }

  async getProfileById(id) {
    const res = await tallyApi.get('profile/' + id)
    return res.data
  }
}

export const profilesService = new ProfilesService()
