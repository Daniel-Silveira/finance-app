import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Edit from '../screens/edit'
import Home from '../screens/home'

const Stack: any = createNativeStackNavigator()

const NavigateConfig = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#1A1A2E' },
          }}
        >
          <Stack.Screen name="Home" component={Home}   />
          <Stack.Screen name="Edit" component={Edit}   />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default NavigateConfig
