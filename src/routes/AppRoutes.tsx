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

type RootStackParamList = {
  home: undefined
  search: undefined
  product: undefined
  cart: undefined
  checkout: undefined
  order: undefined
  orders: undefined
  profile: undefined
  signin: undefined
  signup: undefined
  start: undefined
  address: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="product" component={Product} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="start" component={Start} />
      <Stack.Screen name="address" component={Address} />
    </Stack.Navigator>
  )
}
