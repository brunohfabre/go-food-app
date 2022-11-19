import { Platform, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { sizes } from '../../styles/sizes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: Platform.OS === 'android' ? getStatusBarHeight() + 16 : 16,
  },
  headerName: {
    fontSize: 18,
    color: colors.gray12,
  },
  headerImage: {
    width: 40,
    height: 40,
  },
  title: {
    color: colors.gray11,
    fontSize: 16,
    marginBottom: 8,
  },
  categories: {
    padding: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  category: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
  },
  itemVertical: {
    backgroundColor: colors.white,
    borderRadius: sizes.borderRadius,
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  itemHorizontal: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 96,
    height: 96,
  },
  itemTitle: {
    fontSize: 16,
    color: colors.gray12,
    marginTop: 16,
  },
  itemValue: {
    fontSize: 16,
    color: colors.gray12,
    fontWeight: '600',
    marginTop: 8,
  },
})
