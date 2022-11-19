import { SafeAreaView, Text } from 'react-native'

import { RouteProp, useRoute } from '@react-navigation/native'

import { PageHeader } from '../../components/PageHeader'
import { styles } from './styles'

export function Product() {
  const { params } = useRoute<
    RouteProp<{
      params: {
        id: string
      }
    }>
  >()

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader showGoBack />
      <Text>{JSON.stringify(params, null, 2)}</Text>
    </SafeAreaView>
  )
}
