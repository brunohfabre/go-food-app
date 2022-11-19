import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  background: {
    position: 'absolute',
    width: '100%',
    top: -556,
    zIndex: -1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gray12,
    textAlign: 'center',
    maxWidth: 320,
  },
  titleHighlight: {
    color: colors.secondary,
  },
  subtle: {
    fontSize: 16,
    color: colors.gray11,
    textAlign: 'center',
    maxWidth: 340,
    marginTop: 16,
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
