import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { sizes } from '../../styles/sizes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: sizes.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.gray12,
    marginLeft: 8,
  },
})
