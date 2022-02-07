import {saveData, updateData} from './types';

export function SaveData(
  name: String,
  surname: String,
  email: String,
  cellNo: String,
) {
  return (dispatch: any) => {
    let obj = {name: name, surname: surname, email: email, cellNo: cellNo};
    dispatch({type: saveData, payload: {obj}});
  };
}

export function UpdateData(
  name: String,
  surname: String,
  email: String,
  cellNo: String,
  index:number
) {
  return (dispatch: any) => {
    let obj = {name: name, surname: surname, email: email, cellNo: cellNo,index:index};
    dispatch({type: updateData, payload: {obj}});
  };
}