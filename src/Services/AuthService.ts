import axios, { AxiosResponse } from 'axios';
import { LoginRequestModel } from '../Models/Requests/Auth/LoginRequestModel';
import { RegisterRequestModel } from '../Models/Requests/Auth/RegisterRequestModel';
import { TokenModel } from '../Models/Responses/Token/TokenModel';
import { BASE_API_URL } from '../environment/environment';

class AuthService {
  login(loginRequest: LoginRequestModel): Promise<AxiosResponse<TokenModel, any>> {
    return axios.post<TokenModel>(BASE_API_URL+'Auths/login',loginRequest);
  }

  register(
    registerRequest: RegisterRequestModel
  ): Promise<AxiosResponse<TokenModel, any>> {
    return axios.post(BASE_API_URL+'Auths/register', registerRequest);
  }
}

export default new AuthService();