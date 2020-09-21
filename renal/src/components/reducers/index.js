
import * as actionTypes from '../actions';

  export const patient = (state = [], action) => {
    switch (action.type){
      case "CREATE_NEW_PATIENT":
      return [
        ...state,
        Object.assign({}, action.data)
      ];
      default:
            return state;
    }
  };

  export const staff = (state = [], action) => {
    switch (action.type){
      case "CREATE_NEW_STAFF":
      return [
        ...state,
        Object.assign({}, action.data)
      ];
      default:
            return state;
    }
  };

  
  export const user = (state = '', action) => {
    switch (action.type){
      case "LOGGED_IN":
        return action.data
      case "LOGGED_OUT":
        return ''
      default:
            return state;
    }
  };

  

// export const family = (state = [], action) => {
//     switch (action.type){
//       case actionTypes.CREATE_NEW_Member:
//       return [
//         ...state,
//         Object.assign({}, action.newmember)
//       ];
//       default:
//             return state;
//     }
//   };