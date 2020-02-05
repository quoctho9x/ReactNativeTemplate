import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import {tiny, super_tiny, small} from "App/Theme/Metrics";

export default StyleSheet.create({
  containerAvatar: {
    backgroundColor: Colors.skyblue,
    alignItems:'center',
    padding: tiny,
    paddingBottom:small,
  },
  avatar: {
    marginTop: small,
    alignSelf: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth:1,
    borderColor:Colors.white
  },
  name: {
    ...Fonts.medium,
    margin: super_tiny,
    textAlign: 'center',
    color : Colors.text,
  },
  title:{
    ...Fonts.medium,
    paddingTop: small,
    color : Colors.orange,
  },
  text:{
    ...Fonts.medium,
    color : Colors.text,
  }

})
