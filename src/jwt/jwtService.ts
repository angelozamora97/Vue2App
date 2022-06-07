import { AxiosInstance } from "axios"
import jwtDefaultConfig from "./jwtDefaultConfig";


export default class {
  // Will be used by this service for making API calls
  axiosIns:AxiosInstance;
  // jwtConfig <= Will be used by this service
  jwtConfig={...jwtDefaultConfig}

  // Base URL to API calls
  baseURL:String = ''
  
  constructor(axiosins:AxiosInstance, jwtOverrideConfig:any){
    this.axiosIns = axiosins
    this.jwtConfig = {...this.jwtConfig , ...jwtOverrideConfig}
  }
}