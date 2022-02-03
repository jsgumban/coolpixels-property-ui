import {
  GET_DETAILS,
  GET_DETAILS_SUCCESS, GET_DETAILS_FAIL,
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  details: {}
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      state = {
        ...state,
      }
      break;
      
    case GET_DETAILS_SUCCESS:
      state = {
        ...state,
        details: action.payload,
      }
      break;
      
    case GET_DETAILS_FAIL:
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

export default data
