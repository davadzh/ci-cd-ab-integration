import { axiosInstance } from "@shared/config/api/axios-instance.ts";
import { SignInResponseType } from "@entities/user/types/api-types/sign-in-response.type.ts";

export const userApi = {
  signIn: (token: string) => {
    return axiosInstance.post<SignInResponseType>(`/auth/sign-in`, {
      token,
    })
  },
  validateToken: () => {
    return axiosInstance.get('/auth/validate-token')
  }
}