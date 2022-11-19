import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  timeline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineItem: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineItemDate: {
    color: colors.gray11,
    fontSize: 14,
  },
  timelineItemText: {
    fontSize: 16,
    color: colors.gray12,
    flexShrink: 1,
  },
})
