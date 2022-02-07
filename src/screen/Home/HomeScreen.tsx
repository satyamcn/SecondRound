import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Listcard from '../../components/Listcard';
import colors from '../../utils/colors';

const HomeScreen = () => {
  let array = Array.from(Array(1000).keys());
  const RenderLabel = (index: number) => {
    if ((index + 1) % 100 == 0) {
      return 'boop boop';
    } else if ((index + 1) % 20 == 0) {
      return 'boop';
    } else if ((index + 1) % 5 == 0) {
      return 'beep';
    } else {
      return 'Word ' + (index + 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={array}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 30}}
        renderItem={({item, index}) => (
          <Listcard
            label={RenderLabel(index)}
            onItemClick={() => console.log('click on item')}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

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
  container: {
    flex: 1,
  },
});
