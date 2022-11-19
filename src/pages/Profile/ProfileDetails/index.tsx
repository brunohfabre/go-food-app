import React, { useRef } from 'react'
import { SafeAreaView, View } from 'react-native'

import { z } from 'zod'

import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { PageHeader } from '../../../components/PageHeader'
import { getValidationErrors } from '../../../utils/getValidationErrors'
import { styles } from './styles'

const detailsFormSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  email: z.string().min(1, 'Campo obrigatório'),
})

type SignUpFormInputs = z.infer<typeof detailsFormSchema>

export function ProfileDetails() {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  function handleSubmit(data: SignUpFormInputs) {
    try {
      formRef.current?.setErrors({})

      detailsFormSchema.parse(data)

      navigation.goBack()
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
        </Form>

        <Button onPress={formRef.current?.submitForm}>Salvar</Button>
      </View>
    </SafeAreaView>
  )
}
