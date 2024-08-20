export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';



export const signupRequest = (userData,resolve, reject) => ({
  type: SIGNUP_REQUEST,
  payload: userData,
  resolve,
  reject,
});

export const signinRequest = (userData,resolve, reject) => ({
  type: SIGNIN_REQUEST,
  payload: userData,
  resolve,
  reject,
});

