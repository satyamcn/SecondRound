import {saveData, updateData} from './types';

const initialState = {
  data: [],
} as any;

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case saveData:
      let temp = initialState.data;
      let name = action.payload.obj.name;
      let email = action.payload.obj.email;
      let surname = action.payload.obj.surname;
      let cellNo = action.payload.obj.cellNo;
      let obj = {
          name:name,
          email:email,
          surname:surname,
          cellNo:cellNo
      }
      temp.push(obj)
      return {
        ...state,
        data: temp,
      };
    case updateData:
      let tempUpdate = state.data;
      let nameUpdate = action.payload.obj.name;
      let emailUpdate = action.payload.obj.email;
      let surnameUpdate = action.payload.obj.surname;
      let cellNoUpdate = action.payload.obj.cellNo;
      let index = action.payload.obj.index;
      tempUpdate[index].name = nameUpdate
      tempUpdate[index].email = emailUpdate
      tempUpdate[index].surname = surnameUpdate
      tempUpdate[index].cellNo = cellNoUpdate
      return {
        ...state,
        data:tempUpdate
      }
    
    default:
      return state;
  }
};
export default userReducer;
