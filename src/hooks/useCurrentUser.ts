/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query"
import { getLocalItem } from "../utils"
import axios from "axios"

interface ICurrentUser {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: string
}

export interface Hair {
  color: string
  type: string
}

export interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface Company {
  department: string
  name: string
  title: string
  address: Address2
}

export interface Address2 {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates2
  country: string
}

export interface Coordinates2 {
  lat: number
  lng: number
}

export interface Crypto {
  coin: string
  wallet: string
  network: string
}

export const useCurrentUser = () => {
  const token = getLocalItem("token")

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async (): Promise<ICurrentUser> => {
      try {
        const res = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        return res.data
      } catch (error: any) {
        throw new Error(
          error?.response?.data?.message || "Something went wrong!"
        )
      }
    },
  })
}
