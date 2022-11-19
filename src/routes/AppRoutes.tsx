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
import { ProfileDetails } from '../pages/Profile/ProfileDetails'
import { Search } from '../pages/Search'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Start } from '../pages/Start'
import { CustomTabBar } from './CustomTabBar'
import { Empty } from './Empty'

type RootStackParamList = {
  'home-tab': undefined
  search: undefined
  product: {
    id: string
  }
  cart: undefined
  checkout: undefined
  order: {
    id: string
  }
  signin: undefined
  signup: undefined
  start: undefined
  address: undefined
  profile: undefined
  'profile-details': undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator()

function HomeBottomTab() {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <BottomTab.Screen
        name="orders"
        component={Orders}
        options={{ tabBarLabel: 'Pedidos' }}
      />
      <BottomTab.Screen
        name="profile"
        component={Empty}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </BottomTab.Navigator>
  )
}

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      <Stack.Screen name="profile-details" component={ProfileDetails} />
    </Stack.Navigator>
  )
}
