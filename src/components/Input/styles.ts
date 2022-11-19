import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { sizes } from '../../styles/sizes'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: sizes.borderRadius,

    gap: 4,

    backgroundColor: colors.gray4,
  },
  label: {
    color: colors.gray11,
    fontSize: 16,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
  },
  error: {
    color: colors.red11,
    fontSize: 16,
  },
  showPassButton: {
    height: 48,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
})
