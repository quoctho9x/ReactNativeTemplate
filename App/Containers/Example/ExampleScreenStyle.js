import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import {tiny} from "App/Theme/Metrics";

export default StyleSheet.create({
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: tiny,
    textAlign: 'center',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.normal,
    marginBottom: tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: tiny,
    textAlign: 'center',
  },
})
