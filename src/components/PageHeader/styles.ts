import { Platform, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? getStatusBarHeight() + 16 : 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray12,
  },
  align: {
    width: 40,
  },
})
