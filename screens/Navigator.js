import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './login';
import Register from './register';
import Main from './MainMenu';
import Kitchen from './kitchen';
import Training from './training';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    
    Login:{screen:Login},
    Register:{screen:Register},
    Main:{screen:Main},
    Kitchen:{screen:Kitchen},
    Training:{screen:Training},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);