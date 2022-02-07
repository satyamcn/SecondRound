import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateData} from '../../service/redux/user/action';
import colors from '../../utils/colors';

const UpdateCapture = ({navigation, route}: any) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [cellNo, setCellNo] = useState<string>('');
  const dispatch = useDispatch();
  const userReducer = useSelector((state: any) => state.userReducer);
  const index = route.params.index;
  useEffect(() => {
    Editable();
  }, []);
  const Editable = () => {
    setName(userReducer.data[index].name);
    setEmail(userReducer.data[index].email);
    setSurname(userReducer.data[index].surname);
    setCellNo(userReducer.data[index].cellNo);
  };
  const Update = () => {
    dispatch(UpdateData(name, surname, email, cellNo, index));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Surname"
        onChangeText={setSurname}
        value={surname}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Cell No"
        onChangeText={setCellNo}
        value={cellNo}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          Update();
        }}>
        <Text style={{fontSize: 16, color: colors.WHITE}}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default UpdateCapture;
const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  inputStyle: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginHorizontal: 18,
  },
});
