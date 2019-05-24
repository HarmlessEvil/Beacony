import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { XYZCard as Card } from './uikit'

export default class XYZCard extends Component {
  state = {
    subscriptions: [],
    values: []
  }

  componentDidMount = () => {
    this.props.service.characteristics().then(characteristics => {
      this.setState({
        values: Array(characteristics.length).fill(0)
      })

      characteristics.forEach((characteristic, i) => {
        this.setState(state => ({
          subscriptions: [...state.subscriptions, characteristic.monitor((error, monitoredCharacteristics) => {
            this.setState(monitoredState => {
              const values = [...monitoredState.values]
              values[i] = Buffer.from(monitoredCharacteristics.value, 'base64').readFloatLE()
  
              return {
                values
              }
            })
          })]
        }))
      })
    })
  }

  componentWillUnmount = () => {
    const { subscriptions } = this.state

    subscriptions.forEach(subscription => subscription.remove())
  }

  render() {
    const { name } = this.props
    const { values } = this.state

    return (
      <View>
        <Text>{name}</Text>
        {values.length > 0 && <Card name={name} x={values[0]} y={values[1]} z={values[2]} />}
      </View>
    )
  }
}
