import { useState } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import UserImage from '../../assets/images/user.png'
import { colors } from '../../styles/colors'
import { styles } from './styles'

const user = {
  name: 'John Doe',
}

const categories = [
  {
    id: '1',
    label: '🍔 Hamburger',
  },
  {
    id: '2',
    label: '🍕 Pizza',
  },
  {
    id: '3',
    label: '☕️ Café',
  },
  {
    id: '4',
    label: '🍣 Sushi',
  },
]

export function Home() {
  const navigation = useNavigation()

  const [categorySelected, setCategorySelected] = useState(categories[0].id)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerName}>Olá, {user.name} 👋</Text>
        <Image style={styles.headerImage} source={UserImage} />
      </View>

      <ScrollView>
        <View style={styles.categories}>
          <Text style={styles.title}>Categorias</Text>

          <ScrollView
            style={styles.categoriesContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setCategorySelected(category.id)}
                style={{
                  ...styles.category,
                  backgroundColor:
                    categorySelected === category.id
                      ? colors.primary
                      : colors.white,
                }}
              >
                <Text
                  style={{
                    ...styles.categoryText,
                    color:
                      categorySelected === category.id
                        ? colors.white
                        : colors.gray11,
                  }}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.itemVertical}
            onPress={() =>
              navigation.navigate('product', {
                id: '1',
              })
            }
          >
            <Image
              source={{
                uri: 'https://github.com/brunohfabre.png',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemTitle}>name</Text>
            <Text style={styles.itemValue}>R$ 47,90</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}
