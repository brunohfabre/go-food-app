import { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export function Profile() {
  const navigation = useNavigation()

  useEffect(() => {
    if (1 + 1 === 2) {
      navigation.navigate('start')
    }
  })

  return (
    <View>
      <Text>Profile page</Text>
    </View>
  )
}
