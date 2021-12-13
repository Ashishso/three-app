import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './Screen/MainTabScreen';
import Detailscreen from './Screen/DetailsScreen';
import HomeScreen from './Screen/HomeScreen';




const Drawer = createDrawerNavigator();

const App = () => {
    return (
<NavigationContainer>
      <Drawer.Navigator initialRouteName="reels"  screenOptions={{
            headerStyle: {
            backgroundColor: '#009DAE',
             },
               headerTintColor: '#fff',
               headerTitleStyle: {
               fontWeight: 'bold',
               },
             }}>
          <Drawer.Screen name="reels" component={Detailscreen} />
          <Drawer.Screen name="details" component={HomeScreen} />
     </Drawer.Navigator>
</NavigationContainer>
 
    );
  }
export default App;