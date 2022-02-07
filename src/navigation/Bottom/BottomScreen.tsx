import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Keyboard,
  Text,
} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Colors from '../../utils/colors';
import screenName from '../../utils/screenName';

const BottomScreen = ({state, descriptors, navigation}: any) => {
  const routeName =
    getFocusedRouteNameFromRoute(state?.routes[state.index]) ?? '';

  const tabVisible = descriptors[state.routes[state.index].key].options;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const {index} = state;
  if (
    tabVisible?.tabBarVisible == false ||
    (isKeyboardVisible && Platform.OS == 'android')
  ) {
    return null;
  }

  const isFocused = state.index === index;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenName.homeScreen);
        }}
        activeOpacity={0.5}
        style={styles.buttonStyle}>
        {index == 0 ? (
          <Text style={styles.activeLabel}>Home</Text>
        ) : (
          <Text style={styles.inactiveLabel}>Home</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenName.displayScreen);
        }}
        activeOpacity={0.5}
        style={styles.buttonStyle}>
        {index == 1 ? (
          <Text style={styles.activeLabel}>Display</Text>
        ) : (
          <Text style={styles.inactiveLabel}>Display</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenName.captureScreen);
        }}
        activeOpacity={0.5}
        style={styles.buttonStyle}>
        {index == 2 ? (
          <Text style={styles.activeLabel}>Capture</Text>
        ) : (
          <Text style={styles.inactiveLabel}>Capture</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BottomScreen;

const styles = StyleSheet.create({
  inactiveLabel: {
    color: Colors.gray,
    fontSize: 15,
  },
  activeLabel: {
    color: Colors.primary,
    fontSize: 15,
  },
  container: {
    height: 60,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    paddingBottom: 30,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
