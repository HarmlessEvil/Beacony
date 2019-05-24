import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/views/HomeScreen'
import ChartsScreen from './src/views/ChartsScreen'
import { STARGATE_HOME, STARGATE_DETAILS } from './routes'

const AppNavigator = createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: ChartsScreen
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
