import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';     


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
       initialRouteName="Home"
       activeColor="#e91e63"
       barStyle={{ backgroundColor: 'tomato' }}
       >
      <Tab.Screen
        name="Home"
        component={ HomeStackScreen }
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
    />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
       />
    </Tab.Navigator>

  );

const HomeStackScreen = ({navigation}) => (

    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009DAE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <HomeStack.screen name='Home' component={HomeScreen} />

    </HomeStack.Navigator>
  );

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#009DAE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <DetailsStack.screen name='Details' component={ DetailsScreen} />
    </DetailsStack.Navigator>
  );

export default MainTabScreen;
  






