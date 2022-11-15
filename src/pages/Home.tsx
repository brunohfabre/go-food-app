import { useRef } from 'react'
import { View } from 'react-native'

import { z } from 'zod'

import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import { CaretLeft } from '../assets/icons/CaretLeft'
import { Button } from '../components/Button'
import { IconButton } from '../components/IconButton'
import { Input } from '../components/Input'
import { LinkButton } from '../components/LinkButton'
import { getValidationErrors } from '../utils/getValidationErrors'

const testFormSchema = z.object({
  name: z.string().min(1),
})

export function Home() {
  const navigation = useNavigation()

  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    try {
      formRef.current?.setErrors({})

      testFormSchema.parse(data)

      console.log(data)
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <IconButton>
        <CaretLeft />
      </IconButton>

      <Button onPress={() => navigation.navigate('order')}>Next route</Button>

      <LinkButton>Criar conta.</LinkButton>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Name" placeholder="Name" />
      </Form>
    </View>
  )
}
