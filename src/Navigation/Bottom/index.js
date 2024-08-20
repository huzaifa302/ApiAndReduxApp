import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/MainStack/Home';
import SavedBlogs from '../../Screens/MainStack/SavedBlogs';
import Notification from '../../Screens/MainStack/Notification';
import Profile from '../../Screens/MainStack/Profile';
import Settings from '../../Screens/MainStack/Settings';
import Color from '../../config/Color';

const {height, width} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [style.TabBarContainer],
        tabBarLabel: '',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                style.TabHighlightContainer,
                {
                  backgroundColor: focused
                    ? Color.TabHighlightColor
                    : 'transparent',
                },
              ]}>
              <Image
                source={require('../../assets/icons/home.png')}
                style={{height: 25, width: 25}}
                tintColor={focused ? Color.Black : Color.grey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SavedBlogs"
        component={SavedBlogs}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                style.TabHighlightContainer,
                {
                  backgroundColor: focused
                    ? Color.TabHighlightColor
                    : 'transparent',
                },
              ]}>
              <Image
                source={require('../../assets/icons/saved.png')}
                style={{height: 25, width: 25}}
                resizeMode="contain"
                tintColor={focused ? Color.Black : Color.grey}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                style.TabHighlightContainer,
                {
                  backgroundColor: focused
                    ? Color.TabHighlightColor
                    : 'transparent',
                },
              ]}>
              <Image
                source={
                  focused
                    ? require('../../assets/icons/Notifications.png')
                    : require('../../assets/icons/NotificationsGrey.png')
                }
                style={{height: 25, width: 25}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                style.TabHighlightContainer,
                {
                  backgroundColor: focused
                    ? Color.TabHighlightColor
                    : 'transparent',
                },
              ]}>
              <Image
                source={require('../../assets/icons/profile.png')}
                style={{height: 25, width: 25}}
                tintColor={focused ? Color.Black : Color.iconColor}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                style.TabHighlightContainer,
                {
                  backgroundColor: focused
                    ? Color.TabHighlightColor
                    : 'transparent',
                },
              ]}>
              <Image
                source={require('../../assets/icons/Setting.png')}
                style={{height: 25, width: 25}}
                resizeMode="contain"
                tintColor={focused ? Color.Black : Color.iconColor}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  TabBarContainer: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    height: height / 12,
    flex: 1,
    margin: 22,
    borderRadius: 45,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  TabHighlightContainer: {
    position: 'absolute',
    top: 13,
    padding: 8,

    borderRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,

      height: 5,
    },

    shadowOpacity: 0.34,

    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default TabBar;
