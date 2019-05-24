import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const XYZCard = props => {
  const { name, x, y, z } = props
  const { container, title, value, valuesPanel } = styles

  return (
    <View style={container}>
      <Text style={title}>{name}</Text>
      <View style={valuesPanel}>
        <Text style={value}>{+x.toFixed(2)}</Text>
        <Text style={value}>{+y.toFixed(2)}</Text>
        <Text style={value}>{+z.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  title: {
    backgroundColor: 'gray',
    textAlign: 'center'
  },
  valuesPanel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  value: {
    fontSize: 20
  }
})

export { XYZCard }
