/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

interface ILoginBody {
  username: string
  password: string
}

interface LoginRes {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (reqBody: ILoginBody): Promise<LoginRes> => {
      try {
        const res = await axios.post(
          "https://dummyjson.com/auth/login",
          reqBody
        )
        console.log({ res: res.data })
        return res.data
      } catch (error: any) {
        throw new Error(
          error?.response?.data?.message || "Something went wrong"
        )
      }
    },
  })
}
