import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class ServiceCard extends Component {
  // state = {
  //   characteristics: []
  // }

  // componentDidMount = () => {
  //   const { service } = this.props

  //   service.characteristics().then(characteristics => {
  //     this.setState({
  //       characteristics
  //     })
  //   })
  // }

  render() {
    const { icon, name } = this.props
    const { iconContainer, container } = styles

    return (
      <View style={container}>
        <Text style={iconContainer}>{ icon }</Text>
        <Text>{ name }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  iconContainer: {
    fontSize: 20
  }
})

export { ServiceCard }
