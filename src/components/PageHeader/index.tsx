import { Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CaretLeftRegular } from '../../assets/icons/CaretLeftRegular'
import { IconButton } from '../IconButton'
import { styles } from './styles'

type PageHeaderProps = {
  title?: string
  showGoBack?: boolean
}

export function PageHeader({ title, showGoBack }: PageHeaderProps) {
  const navigation = useNavigation()

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: showGoBack ? 'space-between' : 'center',
      }}
    >
      {showGoBack && (
        <IconButton onPress={navigation.goBack}>
          <CaretLeftRegular />
        </IconButton>
      )}

      <Text style={styles.title}>{title}</Text>

      {showGoBack && <View style={styles.align} />}
    </View>
  )
}
