import React, { Component } from 'react'
import { Button, ScrollView, StyleSheet, View } from 'react-native'
import { BleManager } from 'react-native-ble-plx'
import { Header } from '../components/uikit'
import XYZTable from '../components/XYZTable'
import { windowHeight } from '../../constants'
import { STARGATE_DETAILS } from '../../routes'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.manager = new BleManager()

    this.scanAndConnect = this.scanAndConnect.bind(this)
    this.connect = this.connect.bind(this)
  }

  state = {
    isBleEnabled: false,
    isDeviceConnected: false,
    data: {},
    deviceAccelerationX: 0,
    deviceAccelerationY: 0,
    deviceAccelerationZ: 0,
    xyzServices: {}
  }

  componentWillMount = () => {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.setState({
          isBleEnabled: true
        })
        subscription.remove()
      }
    }, true)
  }

  scanAndConnect() {
    this.setState({
      data: {}
    })

    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error)
        return
      }

      const { data } = this.state
      data[device.id] = device
      this.setState({
        data
      })
    })
  }

  connect(device) {
    return () => {
      device.connect()
        .then(connectedDevice => {
          this.setState({
            isDeviceConnected: true
          })

          return connectedDevice.discoverAllServicesAndCharacteristics()
        })
        .then(connectedDevice => {
          return connectedDevice.services()
        })
        .then(services => {
          this.setState({
            xyzServices: {
              Acceleration: services[5],
              Gyroscope: services[6]
            }
          })
        })
    }
  }

  render() {
    const { isBleEnabled, isDeviceConnected, data, xyzServices } = this.state
    const { container } = styles
    const { navigation } = this.props

    return (
      <View>
        <Header />
        <Button color="green" title="CHARTS" onPress={() => navigation.navigate(STARGATE_DETAILS)} />
        {isDeviceConnected ? (
          <ScrollView>
            <View>
              {
                Object.keys(xyzServices).length > 0 && <XYZTable services={xyzServices} />
              }
            </View>
          </ScrollView>
        ) : (
          <View style={container}>
            <Button
              disabled={!isBleEnabled}
              onPress={this.scanAndConnect}
              title={`${Object.keys(data).length ? 're' : ''}scan`}
            />
            <ScrollView>
              {Object.values(data).map(
                device => <Button title={device.name ? device.name : device.id} key={device.id} onPress={this.connect(device)} />
              )}
            </ScrollView>
          </View>
        )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.9
  }
})
