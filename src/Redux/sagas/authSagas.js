import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from '../actions/authAction';
import axios from 'axios';
import NavService, { navigate } from '../../Navigation/NavService';

const API_BASE_URL = 'http://localhost:3000';

const signupApi = userData => axios.post(`${API_BASE_URL}/api/signup`, userData);
const signinApi = userData => axios.post(`${API_BASE_URL}/api/signin`, userData);

function* signupSaga(action) {
    try{
        const response = yield call(signupApi, action.payload)
        console.log(response,'signTest')
        yield put({type: SIGNUP_SUCCESS, payload: response.data} );
        action.resolve(response)
    }
    catch (error) {
        yield put({ type: SIGNUP_FAILURE, payload: {error: error.message}})
        action.reject(error)
    }
}

function* signinSaga(action) {
    try{
        const response = yield call(signinApi, action.payload)
        console.log(response,'asdfghjkl')
        yield put({type: SIGNIN_SUCCESS, payload: response.data} );
        action.resolve(response)

    }
    catch (error) {
        console.log('AJAAA',JSON.stringify(error));
        yield put({ type: SIGNIN_FAILURE, payload: {error: error.message}})
        action.reject(error.message)
    }
}

export default function* authSagas() {
    yield takeEvery(SIGNUP_REQUEST, signupSaga)
    yield takeEvery(SIGNIN_REQUEST, signinSaga)
}