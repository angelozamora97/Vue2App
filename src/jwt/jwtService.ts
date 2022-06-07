import { AxiosInstance } from "axios"
import jwtDefaultConfig from "./jwtDefaultConfig";


export default class {
  // Will be used by this service for making API calls
  axiosIns:AxiosInstance;
  // jwtConfig <= Will be used by this service
  jwtConfig={...jwtDefaultConfig}

  // Base URL to API calls
  baseURL:String = 'https://pokeapi.co/api/v2/'
  
  constructor(axiosins:AxiosInstance, jwtOverrideConfig:any){
    this.axiosIns = axiosins
    this.jwtConfig = {...this.jwtConfig , ...jwtOverrideConfig}
  }

  getPokemons(){
    return this.axiosIns.get(
      this.baseURL + this.jwtConfig.getPokemons
    )
  }
  getApiPokemon(args:string){
    return this.axiosIns.get(
      args
    )
  }
}