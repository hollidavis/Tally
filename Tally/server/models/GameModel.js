export default class GameModel {
  constructor({ id, name, max_players, min_players, min_playtime, max_playtime, description, thumb_url, image_url, min_age, url }) {
    this.name = name
    this.description = description || 'no description provided for this game.'
    this.minPlayers = min_players || 0
    this.maxPlayers = max_players || 0
    this.smallImg = thumb_url || '//placehold.it/50x50'
    this.largeImg = image_url || '//placehold.it/200x200'
    this.minPlayTime = min_playtime || 0
    this.maxPlayTime = max_playtime || 0
    this.playerAge = min_age || 0
    this.websiteLink = url || 'no website provided for this game.'
    this.gameApiId = id
  }
}
