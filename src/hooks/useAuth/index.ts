import { AsyncStorage } from 'react-native'
import http from '../../services/api'
import { dispatchUser } from '../../state/user'
import { UserType } from '../../types/user'

export const useAuth = () => {
  const PARTIAL_URL = 'auth'

  const auth = async (user: UserType) => {
    try {
      const { status, data } = await http.post(`/${PARTIAL_URL}`, user)
      if (status === 200) {
        dispatchUser(data)
        AsyncStorage.setItem('user', JSON.stringify(data))
        return true
      }
    } catch (error) {
      console.log(error.response.data)
      return false
    }
  }

  return { auth }
}
