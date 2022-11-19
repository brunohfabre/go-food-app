import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 56 + getBottomSpace(),

    flexDirection: 'row',

    paddingBottom: getBottomSpace(),
  },
  button: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
})
