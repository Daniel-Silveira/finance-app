import { createGetReState, createReState, createReStateDispatch, createReStateSelect } from '@raulpesilva/re-state'
import { UserType } from '../../types/user'

export const USER = 'user'
export const userInitialValue: UserType = { _id: '', name: '', password: '', email: '' }

export const useUser = createReState<UserType>(USER, userInitialValue)
export const useUserSelect = createReStateSelect<UserType>(USER)
export const dispatchUser = createReStateDispatch<UserType>(USER)
export const getUser = createGetReState<UserType>(USER)
export const resetUser = () => dispatchUser(userInitialValue)
