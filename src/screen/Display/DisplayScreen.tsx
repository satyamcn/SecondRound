import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import screenName from '../../utils/screenName';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../../utils/colors';
import Listcard from '../../components/Listcard';
const DisplayScreen = ({navigation}: any) => {
  const userReducer = useSelector((state: any) => state.userReducer);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={userReducer?.data}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noDataView}>
            <Text style={styles.noDataLabel}>No Data Available</Text>
          </View>
        )}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 30}}
        renderItem={({item, index}) => (
          <Listcard
            label={item.name + ' ' + item.surname}
            onItemClick={() =>
              navigation.navigate(screenName.updateCapture, {index: index})
            }
          />
        )}
      />
    </SafeAreaView>
  );
};
export default DisplayScreen;

const styles = StyleSheet.create({
  noDataLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
    padding: 10,
  },
  listContainer: {
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
});
