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

const signUpFormSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})

type SignUpFormInputs = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  function handleSubmit(data: SignUpFormInputs) {
    try {
      formRef.current?.setErrors({})

      signUpFormSchema.parse(data)

      console.log('sign up')
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title="Criar conta" showGoBack />

      <View style={styles.content}>
        <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
          <Input name="name" label="Nome" placeholder="Ex. John Doe" />
          <Input
            name="email"
            label="Email"
            placeholder="Ex. johndoe@email.com"
            style={{ marginTop: 12 }}
          />
          <Input
            name="password"
            label="Senha"
            placeholder="Ex. abcd1234"
            type="password"
            style={{ marginTop: 12 }}
          />
          <Input
            name="confirmPassword"
            label="Confirmar senha"
            placeholder="Ex. abcd1234"
            type="password"
            style={{ marginTop: 12 }}
          />
        </Form>

        <View>
          <Button onPress={formRef.current?.submitForm}>Criar conta</Button>

          <View style={styles.word}>
            <Text style={styles.wordText}>Já tem uma conta?</Text>
            <LinkButton onPress={() => navigation.navigate('signin')}>
              Fazer login.
            </LinkButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
