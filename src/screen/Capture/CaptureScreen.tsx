import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {SaveData} from '../../service/redux/user/action';
import colors from '../../utils/colors';

const CaptureScreen = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [cellNo, setCellNo] = useState<string>('');
  const dispatch = useDispatch();
  const Savedata = () => {
    dispatch(SaveData(name, surname, email, cellNo));
    setName('');
    setEmail('');
    setSurname('');
    setCellNo('');
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
          Savedata();
        }}>
        <Text style={{fontSize: 16, color: colors.WHITE}}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default CaptureScreen;

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
    marginHorizontal: 20,
  },
});
