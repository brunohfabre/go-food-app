import { useRef } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { z } from 'zod'

import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LinkButton } from '../../components/LinkButton'
import { PageHeader } from '../../components/PageHeader'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { styles } from './styles'

const signInFormSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})

type SignInFormInputs = z.infer<typeof signInFormSchema>

export function SignIn() {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  function handleSubmit(data: SignInFormInputs) {
    try {
      formRef.current?.setErrors({})

      signInFormSchema.parse(data)

      console.log('sign in')
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Login" showGoBack />

      <View style={styles.content}>
        <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
          <Input
            name="email"
            label="Email"
            placeholder="Ex. johndoe@email.com"
          />
          <Input
            name="password"
            label="Senha"
            placeholder="Ex. abcd1234"
            type="password"
            style={{ marginTop: 12 }}
          />
        </Form>

        <View>
          <Button onPress={formRef.current?.submitForm}>Entrar</Button>

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
