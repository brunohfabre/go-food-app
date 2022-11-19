import { useRef } from 'react'
import { SafeAreaView, View } from 'react-native'

import { z } from 'zod'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { getValidationErrors } from '../../utils/getValidationErrors'
import { styles } from './styles'

const signUpFormSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório'),
  password: z.string().min(1, 'Campo obrigatório'),
})

type SignUpFormInputs = z.infer<typeof signUpFormSchema>

export function Address() {
  const formRef = useRef<FormHandles>(null)

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
      <PageHeader title="Novo endereço" showGoBack />

      <View style={styles.content}>
        <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
          <Input name="cep" label="CEP" placeholder="Ex. 12345-678" />
          <Input
            name="address"
            label="Rua"
            placeholder="Ex. Nome da rua"
            style={{ marginTop: 12 }}
          />
          <Input
            name="number"
            label="Número"
            placeholder="Ex. 1234"
            style={{ marginTop: 12 }}
          />
          <Input
            name="neighborhood"
            label="Bairro"
            placeholder="Ex. Nome do bairro"
            style={{ marginTop: 12 }}
          />
          <Input
            name="city"
            label="Cidade"
            placeholder="Ex. Nome da cidade"
            style={{ marginTop: 12 }}
          />
          <Input
            name="state"
            label="Estado"
            placeholder="Ex. SP"
            style={{ marginTop: 12 }}
          />
        </Form>

        <View>
          <Button onPress={formRef.current?.submitForm}>
            Adicionar endereço
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}
