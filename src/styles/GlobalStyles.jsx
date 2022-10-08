import { StyleSheet } from 'react-native'
import { myColors } from './Colores'

export const Styles = StyleSheet.create({
  // Buttons
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  // btnBlue: {
  //   width: 72,
  //   height: 72,
  //   borderRadius: 24,
  //   backgroundColor: myColors.blue,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 8
  // },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  // btnDark: {
  //   width: 72,
  //   height: 72,
  //   borderRadius: 24,
  //   backgroundColor: myColors.btnDark,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 8
  // },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  // btnLight: {
  //   width: 72,
  //   height: 72,
  //   borderRadius: 24,
  //   backgroundColor: myColors.white,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 8
  // },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  // btnGray: {
  //   width: 72,
  //   height: 72,
  //   borderRadius: 24,
  //   backgroundColor: myColors.btnGray,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 8
  // },
  smallTextGreen: {
    fontSize: 32,
    color: myColors.green
  },
  smallTextRed: {
    fontSize: 32,
    color: myColors.red
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row'
  },
  viewBottom: {
    position: 'absolute',
    bottom: 30
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end'
  },
  screenSecondNumber: {
    fontSize: 48,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end'
  }
})
