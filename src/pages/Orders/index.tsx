import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { format } from 'date-fns'

import { useNavigation } from '@react-navigation/native'

import { CaretRightRegular } from '../../assets/icons/CaretRightRegular'
import { PageHeader } from '../../components/PageHeader'
import { styles } from './styles'

const ordersData = [
  {
    id: '1',
    order: '1',
    value: 'R$ 79,90',
    createdAt: new Date(),
  },
  {
    id: '2',
    order: '2',
    value: 'R$ 9,90',
    createdAt: new Date(),
  },
  {
    id: '3',
    order: '3',
    value: 'R$ 27,90',
    createdAt: new Date(),
  },
]

type OrderType = {
  id: string
  order: string
  value: string
  createdAt: string
}

export function Orders() {
  const navigation = useNavigation()

  const [orders, setOrders] = useState<OrderType[]>([])

  useEffect(() => {
    setOrders(
      ordersData
        .map((order) => ({
          id: order.id,
          order: `#${order.order}`,
          value: order.value,
          createdAt: format(order.createdAt, 'dd/MM/yyyy HH:mm'),
        }))
        .reverse(),
    )
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Pedidos" />

      <ScrollView style={styles.ordersContainer}>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            style={styles.orderButton}
            onPress={() =>
              navigation.navigate('order', {
                id: order.id,
              })
            }
          >
            <View style={styles.orderButtonContent}>
              <Text style={styles.orderButtonNumber}>{order.order}</Text>

              <View>
                <Text style={styles.orderButtonPrice}>{order.value}</Text>
                <Text style={styles.orderButtonDate}>{order.createdAt}</Text>
              </View>
            </View>

            <View>
              <CaretRightRegular />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
