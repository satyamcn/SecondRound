import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../screen/Home/HomeScreen';
import DisplayScreen from '../../screen/Display/DisplayScreen';
import CaptureScreen from '../../screen/Capture/CaptureScreen';
import screenName from '../../utils/screenName';
import BottomStack from '../Bottom/BottomNavigation';
import UpdateCapture from '../../screen/Capture/UpdateCapture';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={screenName.mainTab} component={BottomStack} />
      <Stack.Screen name={screenName.homeScreen} component={HomeScreen} />
      <Stack.Screen name={screenName.displayScreen} component={DisplayScreen} />
      <Stack.Screen name={screenName.captureScreen} component={CaptureScreen} />
      <Stack.Screen name={screenName.updateCapture} component={UpdateCapture} />
    </Stack.Navigator>
  );
};

export default AuthStack;
