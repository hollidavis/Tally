export default class GameModel {
  constructor({ id, name, max_players, min_players, min_playtime, max_playtime, description, thumb_url, image_url, min_age, url }) {
    this.name = name
    this.description = description
    this.minPlayers = min_players
    this.maxPlayers = max_players
    this.smallImg = thumb_url
    this.largeImg = image_url
    this.minPlayTime = min_playtime
    this.maxPlayTime = max_playtime
    this.playerAge = min_age
    this.websiteLink = url
    this.gameApiId = id
  }
}
