import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Edit from '../screens/edit'
import Home from '../screens/home'
import Login from '../screens/login'
import { useNavigation, createNavigationContainerRef } from '@react-navigation/native'
import { useUser } from '../state/user'
import { AsyncStorage } from 'react-native'

const Stack: any = createNativeStackNavigator()

const Navigation = ({ navigation }: any) => {
  const { navigate } = useNavigation()
  const [user, setUser] = useUser()

  const route = navigation.current?.getCurrentRoute()

  const getUserStorage = async () => {
    const user = await AsyncStorage.getItem('user')
    if (!!user) {
      setUser(JSON.parse(user))
    }
  }

  useEffect(() => {
    getUserStorage()
    if (route?.name === 'Home' || route?.name === 'Login') {
      if (!!user._id) {
        return navigate('Home')
      }
      return navigate('Login')
    }
  }, [user._id])

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#1A1A2E' },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  )
}

const NavigateConfig = () => {
  const navigationRef = createNavigationContainerRef()
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigation navigation={navigationRef} />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default NavigateConfig
