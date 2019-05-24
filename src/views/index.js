import { CreateStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ChartsScreen from './ChartsScreen'
import {
  STARGATE_HOME,
  STARGATE_DETAILS
} from '../../routes'

export default CreateStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: ChartsScreen
  },
  {
    headerMode: 'none'
  }
)
