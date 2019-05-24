import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import XYZCard from './XYZCard'

export default class XYZTable extends Component {
  render() {
    const { header } = styles
    const { services } = this.props
    
    return (
      <View>
        <View style={header}>
          <Text>X</Text>
          <Text>Y</Text>
          <Text>Z</Text>
        </View>
        {
          Object.keys(services).map(service => <XYZCard name={service} service={services[service]} key={service} />)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})
