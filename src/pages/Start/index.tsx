import { Image, SafeAreaView, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import StartBgImage from '../../assets/images/start-bg.png'
import { Button } from '../../components/Button'
import { LinkButton } from '../../components/LinkButton'
import { PageHeader } from '../../components/PageHeader'
import { styles } from './styles'

export function Start() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader showGoBack />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Image
            source={StartBgImage}
            style={styles.background}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            A entrega de comida mais{' '}
            <Text style={styles.titleHighlight}>rápida</Text> para você.
          </Text>
          <Text style={styles.subtle}>
            Peça comida e receba a entrega no tempo mais rápido da cidade
          </Text>
        </View>

        <View>
          <Button onPress={() => navigation.navigate('signin')}>
            Fazer login
          </Button>

          <View style={styles.word}>
            <Text style={styles.wordText}>Ainda não tem uma conta?</Text>
            <LinkButton onPress={() => navigation.navigate('signup')}>
              Criar conta.
            </LinkButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
