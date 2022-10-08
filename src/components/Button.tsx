import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Styles } from '../styles/GlobalStyles'
import { TouchableOpacity, Text } from 'react-native'

interface ButtonProps {
  onPress: () => void
  title: string
  isBlue?: boolean
  isGray?: boolean
  style : any
}

export default function Button({ title, onPress, isBlue, isGray, style } : ButtonProps) {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            // ? Styles.smallTextLight
            ? style
            : theme === 'dark'
            // ? Styles.smallTextLight
            ? style
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  )

}
