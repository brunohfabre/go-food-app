import { Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Address } from '../pages/Address'
import { Cart } from '../pages/Cart'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Order } from '../pages/Order'
import { Orders } from '../pages/Orders'
import { Product } from '../pages/Product'
import { Profile } from '../pages/Profile'
import { Search } from '../pages/Search'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Start } from '../pages/Start'
import { Empty } from './Empty'

type RootStackParamList = {
  'home-tab': undefined
  search: undefined
  product: undefined
  cart: undefined
  checkout: undefined
  order: undefined
  signin: undefined
  signup: undefined
  start: undefined
  address: undefined
  profile: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator()

function CustomTabBar(props: any) {
  console.log(props)

  return (
    <View>
      <Text>custom tab bar</Text>
    </View>
  )
}

function HomeBottomTab() {
  return (
    <BottomTab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <BottomTab.Screen name="home" component={Home} />
      <BottomTab.Screen name="orders" component={Orders} />
      <BottomTab.Screen name="profile" component={Empty} />
    </BottomTab.Navigator>
  )
}

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
      }}
    >
      <Stack.Screen name="home-tab" component={HomeBottomTab} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="product" component={Product} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="start" component={Start} />
      <Stack.Screen name="address" component={Address} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  )
}
