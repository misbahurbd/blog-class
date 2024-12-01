/* eslint-disable @typescript-eslint/no-explicit-any */
export const setLocalItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalItem = (key: string) => {
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  } else {
    return null
  }
}

export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key)
}
