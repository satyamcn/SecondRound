import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/Home/HomeScreen';
import CaptureScreen from '../../screen/Capture/CaptureScreen';
import DisplayScreen from '../../screen/Display/DisplayScreen';
import screenName from '../../utils/screenName';
import colors from '../../utils/colors';
import BottomScreen from './BottomScreen';
const Tab = createBottomTabNavigator();
const BottomNavigation = (props: any) => {
  return (
    <Tab.Navigator
      initialRouteName={screenName.homeScreen}
      tabBar={props => <BottomScreen {...props} />}>
      <Tab.Screen
        name={screenName.homeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screenName.displayScreen}
        component={DisplayScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screenName.captureScreen}
        component={CaptureScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
