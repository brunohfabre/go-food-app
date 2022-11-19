import { Text, TouchableOpacity, View } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

import { HouseFill } from '../../assets/icons/HouseFill'
import { HouseRegular } from '../../assets/icons/HouseRegular'
import { ReceiptFill } from '../../assets/icons/ReceiptFill'
import { ReceiptRegular } from '../../assets/icons/ReceiptRegular'
import { UserFill } from '../../assets/icons/UserFill'
import { UserRegular } from '../../assets/icons/UserRegular'
import { colors } from '../../styles/colors'
import { styles } from './styles'

export function CustomTabBar({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const onPress = () => {
          console.log(route.name)

          if (route.name === 'profile') {
            navigate('profile')
          } else {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, { name: route.name, merge: true })
            }
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            {isFocused ? (
              <>
                {route.name === 'home' && <HouseFill />}
                {route.name === 'orders' && <ReceiptFill />}
              </>
            ) : (
              <>
                {route.name === 'home' && <HouseRegular />}
                {route.name === 'orders' && <ReceiptRegular />}
                {route.name === 'profile' && <UserRegular />}
              </>
            )}

            <Text
              style={{
                fontSize: 12,
                color: isFocused ? colors.gray12 : colors.gray9,
              }}
            >
              {typeof options.tabBarLabel === 'string'
                ? options.tabBarLabel
                : ''}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
