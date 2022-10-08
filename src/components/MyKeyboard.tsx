import * as React from 'react'
import Button from './Button'
import { View, Text } from 'react-native'
import { Styles } from '../styles/GlobalStyles'
import { myColors } from '../styles/Colores'

export default function MyKeyboard () {
  const [firstNumber, setFirstNumber] = React.useState('')
  const [secondNumber, setSecondNumber] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [result, setResult] = React.useState<Number | null > (null)

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue)
    }
  }

  const handleOperationPress = (buttonValue: string) => {
    if (buttonValue === '+/-') {
      // const negative = parseInt(firstNumber) * -1
      setOperation('+')
      const newNumber = parseInt(firstNumber) * -1
      setSecondNumber((newNumber).toString())
      setFirstNumber('')      
    }else {
      setOperation(buttonValue)
      setSecondNumber(firstNumber)
      
      setFirstNumber('')
    }
      // setOperation(buttonValue)
      // setSecondNumber(firstNumber)
      
      // setFirstNumber('')
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
    setResult(null)
  }

  const getResult = () => {
    switch (operation) {
      case '+':
        clear()
        setResult(parseInt(secondNumber) + parseInt(firstNumber))
        break
      
      case '-':
        clear()
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break

      case '*':
        clear()
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break

      case '/':
        clear()
        setResult(parseInt(secondNumber) / parseInt(firstNumber))
        break

      case '%':
        clear()
        setResult(parseInt(secondNumber) * parseInt(firstNumber) / 100)
        break

      case '+/-':
        clear()
        setResult(parseInt(firstNumber) * -1)
        break

      default:
        clear()
        setResult(0)
        break
    }
  }

  const firstNumberDisplay = () => {
    if (result !== null) {
      return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.btnGray}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.btnGray}]}>{result?.toString()}</Text>
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]} >
          {firstNumber}
        </Text>
      )
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]} >
          {firstNumber}
        </Text>
      )
    }
  }

  return (
    <View style={Styles.viewBottom} >
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: myColors.red, fontSize: 50, fontWeight: '500' }} >{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title='C' isGray onPress={clear} style={Styles.smallTextGreen} />
        <Button title='+/-' isGray onPress={() => handleOperationPress('+/-')} style={Styles.smallTextGreen} />
        <Button title='%' isGray onPress={() => handleOperationPress('%')} style={Styles.smallTextGreen} />
        <Button title='/' isBlue onPress={() => handleOperationPress('/')} style={Styles.smallTextRed} />
      </View>
      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')} style={Styles.smallTextLight} />
        <Button title='8' onPress={() => handleNumberPress('8')} style={Styles.smallTextLight} />
        <Button title='9' onPress={() => handleNumberPress('9')} style={Styles.smallTextLight} />
        <Button title='x' isBlue onPress={() => handleOperationPress('*')} style={Styles.smallTextRed} />
      </View>
      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')} style={Styles.smallTextLight} />
        <Button title='5' onPress={() => handleNumberPress('5')} style={Styles.smallTextLight} />
        <Button title='6' onPress={() => handleNumberPress('6')} style={Styles.smallTextLight} />
        <Button title='-' isBlue onPress={() => handleOperationPress('-')} style={Styles.smallTextRed} />
      </View>
      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')} style={Styles.smallTextLight} />
        <Button title='2' onPress={() => handleNumberPress('2')} style={Styles.smallTextLight} />
        <Button title='3' onPress={() => handleNumberPress('3')} style={Styles.smallTextLight} />
        <Button title='+' isBlue onPress={() => handleOperationPress('+')} style={Styles.smallTextRed} />
      </View>
      <View style={Styles.row}>
        <Button title='.' onPress={() => handleNumberPress('.')} style={Styles.smallTextLight} />
        <Button title='0' onPress={() => handleNumberPress('0')} style={Styles.smallTextLight} />
        <Button title='⌫' onPress={() => setFirstNumber(firstNumber.slice(0, -1))} style={Styles.smallTextLight} />
        <Button title='=' isBlue onPress={() => getResult()} style={Styles.smallTextRed} />
      </View>
    </View>
  )
}
