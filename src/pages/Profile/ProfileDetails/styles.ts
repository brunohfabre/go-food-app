import { StyleSheet } from 'react-native'

import { colors } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  form: {
    flex: 1,
  },
  word: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  wordText: {
    fontSize: 16,
    alignItems: 'center',
    marginRight: 4,
    color: colors.gray11,
  },
})
