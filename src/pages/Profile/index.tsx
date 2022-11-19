import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CaretRightRegular } from '../../assets/icons/CaretRightRegular'
import { SignOutRegular } from '../../assets/icons/SignOutRegular'
import { UserRegular } from '../../assets/icons/UserRegular'
import UserImage from '../../assets/images/user.png'
import { PageHeader } from '../../components/PageHeader'
import { colors } from '../../styles/colors'
import { styles } from './styles'

export function Profile() {
  const navigation = useNavigation()

  // useEffect(() => {
  //   if (1 + 1 === 2) {
  //     navigation.dispatch(StackActions.replace('start'))
  //   }
  // })

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Perfil" showGoBack />

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={UserImage} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('profile-details')}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <UserRegular color={colors.gray12} />
            <Text style={styles.buttonText}>Editar perfil</Text>
          </View>
          <CaretRightRegular />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('on press')}
          style={{ ...styles.button, marginTop: 12 }}
        >
          <View style={styles.buttonContent}>
            <SignOutRegular />
            <Text style={{ ...styles.buttonText, color: colors.red9 }}>
              Sair
            </Text>
          </View>
          <CaretRightRegular />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
