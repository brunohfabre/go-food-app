import React, { useRef, useEffect, useCallback, useState } from 'react'
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import { useField } from '@unform/core'

import { EyeFill } from '../../assets/icons/EyeFill'
import { EyeSlashFill } from '../../assets/icons/EyeSlashFill'
import { colors } from '../../styles/colors'
import { styles } from './styles'

interface InputProps extends TextInputProps {
  name: string
  label: string
  type?: 'text' | 'password'
}

interface InputReference extends TextInput {
  value: string
}

export function Input({
  name,
  label,
  onChangeText,
  style,
  type = 'text',
  ...rest
}: InputProps) {
  const inputRef = useRef<InputReference>(null)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value

        return ''
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value })
          inputRef.current.value = value
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' })
          inputRef.current.value = ''
        }
      },
    })
  }, [fieldName, registerField])

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value

      if (onChangeText) onChangeText(value)
    },
    [onChangeText],
  )

  return (
    <View style={{ ...styles.container, ...style }}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          placeholderTextColor={colors.gray8}
          style={styles.input}
          secureTextEntry={type === 'password' && !passwordVisible}
          {...rest}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => setPasswordVisible((prevState) => !prevState)}
            style={styles.showPassButton}
          >
            {passwordVisible ? <EyeSlashFill /> : <EyeFill />}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
