import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: 'absolute',

    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
})
