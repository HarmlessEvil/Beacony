import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { windowHeight } from '../../../constants'

const Header = () => {
  const { container, headerText } = styles 

  return (
    <View style={container}>
      <Text style={headerText}>Beacony</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30d0fe',
    height: windowHeight * 0.1,
    justifyContent: 'flex-end',
    paddingLeft: 28,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 28,
    textTransform: 'uppercase'
  }
})

export { Header }
