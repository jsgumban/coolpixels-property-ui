import {
  GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAIL,
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  list: [],
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      state = {
        ...state,
      }
      break;
      
    case GET_LIST_SUCCESS:
      state = {
        ...state,
        list: action.payload,
      }
      break;
      
    case GET_LIST_FAIL:
      state = {
        ...state,
        error: action.payload,
      }
      break;
      
    default:
      state = { ...state }
      break
  }
  
  return state
}

export default data;
