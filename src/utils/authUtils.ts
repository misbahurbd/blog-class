import { getLocalItem, removeLocalItem, setLocalItem } from "."

export const getToken = () => {
  return getLocalItem("token")
}

export const setToken = (value: string) => {
  setLocalItem("token", value)
}

export const removeToken = () => {
  removeLocalItem("token")
}
