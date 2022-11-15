import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
})
