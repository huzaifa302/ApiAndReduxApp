import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  RESET_SUCCESS,
} from '../actions/authAction';

const initialState = {
  user: null,
  token: null,
  error: null,
  loading: null,
  success: false, // Define the success property in the initial state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {...state, loading: true, error: null, success: false}; // Reset success on new request
    case SIGNIN_SUCCESS:
      return { 
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        success: true, // Set success to true on signup success
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false, // Reset success on failure
      };
      case RESET_SUCCESS:
        return {
          ...state,
          success: false,
        };
    default:
      return state;
  }
};

export default authReducer;
