import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../navigation/Stack/AuthStack';

const Route = () => {
  return <NavigationContainer>{AuthStack()}</NavigationContainer>;
};

export default Route;
