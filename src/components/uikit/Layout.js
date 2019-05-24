import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { windowHeight } from '../../../constants'

const Layout = props => {
  const { container, item } = styles

  return (
    <ScrollView>
      <View style={container}>
        {
          props.children.map((element, i) => (
            <View style={item} key={i.toString()}>{element}</View>
          ))
        }
      </View>
    </ScrollView>
  )
}

export { Layout }

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.22,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around'
  },
  item: {
    width: '40%'
  }
})
