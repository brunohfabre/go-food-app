import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { sizes } from '../../styles/sizes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ordersContainer: {
    flex: 1,
    padding: 24,
  },
  orderButton: {
    backgroundColor: colors.white,
    borderRadius: sizes.borderRadius,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderButtonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButtonNumber: {
    fontSize: 18,
    color: colors.gray12,
    fontWeight: '700',
    marginRight: 16,
  },
  orderButtonPrice: {
    fontSize: 14,
    color: colors.gray12,
  },
  orderButtonDate: {
    fontSize: 12,
    color: colors.gray11,
    marginTop: 4,
  },
})
