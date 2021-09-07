import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activeProfile: {},
  games: [],
  gameResults: [],
  activeSearchGames: [],
  myHousehold: {},
  activeHousehold: {},
  gameNights: [],
  activeGameNight: {},
  activeGameNightProfiles: [],
  gameNightHouseholdId: '',
  householdProfiles: [],
  profileHouseholds: [],
  householdId: ''
})
