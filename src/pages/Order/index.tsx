import { SafeAreaView, Text, View } from 'react-native'

import { format } from 'date-fns'

import { RouteProp, useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'

import { CheckCircleFill } from '../../assets/icons/CheckCircleFill'
import { PageHeader } from '../../components/PageHeader'
import { colors } from '../../styles/colors'
import { styles } from './styles'

const orderData = {
  id: '1',
  order: '1',
  value: 'R$ 79,90',
  createdAt: new Date(),
  timeline: [
    {
      createdAt: new Date(),
      status: 'DELIVERED',
    },
    {
      createdAt: new Date(),
      status: 'OUT_DELIVERY',
    },
    {
      createdAt: new Date(),
      status: 'READY',
    },
    {
      createdAt: new Date(),
      status: 'STARTED',
    },
    {
      createdAt: new Date(),
      status: 'ACCEPTED',
    },
  ],
}

export function Order() {
  const { params } = useRoute<
    RouteProp<{
      params: {
        id: string
      }
    }>
  >()

  const { data, isLoading } = useQuery(
    [
      'orders',
      {
        id: params.id,
      },
    ],
    () => {
      const order = {
        id: orderData.id,
        order: `#${orderData.id}`,
        value: orderData.id,
        createdAt: format(orderData.createdAt, 'dd/MM/yyyy HH:mm'),
        timeline: orderData.timeline.map((item) => ({
          status: item.status,
          createdAt: format(item.createdAt, 'HH:mm'),
        })),
      }
      return order
    },
  )

  if (!data && isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title={`Pedido ${data?.order}`} showGoBack />

      <View style={styles.content}>
        {data?.timeline.map((item) => (
          <View key={item.status} style={styles.timeline}>
            <Text style={styles.timelineItemDate}>{item.createdAt}</Text>

            <View style={styles.timelineItem}>
              {item.status === 'DELIVERED' ? (
                <CheckCircleFill />
              ) : (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: colors.gray11,
                  }}
                />
              )}
            </View>

            {item.status === 'DELIVERED' && (
              <Text style={styles.timelineItemText}>Entregue</Text>
            )}
            {item.status === 'OUT_DELIVERY' && (
              <Text style={styles.timelineItemText}>Saiu para entrega</Text>
            )}
            {item.status === 'READY' && (
              <Text style={styles.timelineItemText}>Pedido pronto</Text>
            )}
            {item.status === 'STARTED' && (
              <Text style={styles.timelineItemText}>
                O restaurante começou fazer seu pedido
              </Text>
            )}
            {item.status === 'ACCEPTED' && (
              <Text style={styles.timelineItemText}>Pedido aceito</Text>
            )}
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}
