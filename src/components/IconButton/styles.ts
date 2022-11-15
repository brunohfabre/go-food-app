import { StyleSheet } from 'react-native'

import { sizes } from '../../styles/sizes'

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: sizes.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
})
