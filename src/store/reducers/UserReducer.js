import { AppConstant } from '../../constants/AppConstant';
import { SET_PATIENT_DETAILS, SET_USER_DATA } from '../types';

const initialState = {
  user: null,
  patient: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case SET_PATIENT_DETAILS:
      return { ...state, patient: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
