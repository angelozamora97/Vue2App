import axios, { AxiosInstance } from "axios";
import JwtService from "./jwtService";

function useJwt(axiosIns: AxiosInstance, jwtOverrideConfig:any){
  const jwt = new JwtService(axiosIns, jwtOverrideConfig)
  return {jwt}
}

const {jwt} = useJwt(axios, {})
export default jwt