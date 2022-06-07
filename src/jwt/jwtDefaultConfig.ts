import PokemonApi from "./api/pokemonApi";

export default {
  tokenType: "Bearer",
  storageTokenKeyName: "accessTokenPA",
  storageRefreshTokenKeyName: "refreshTokenPA",
  ...PokemonApi
}