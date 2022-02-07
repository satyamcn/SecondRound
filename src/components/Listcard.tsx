import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
interface Iproptype {
  label: String;
  onItemClick: Function;
}

const Listcard = (props: Iproptype) => {
  return (
    <TouchableOpacity onPress={() => props.onItemClick()}>
      <View style={styles.listContainer}>
        <Text style={styles.labelStyle}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Listcard;
const styles = StyleSheet.create({
  labelStyle: {
    padding: 10,
    fontSize: 16,
  },
  listContainer: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
