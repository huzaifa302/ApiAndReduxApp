import {
  View,
  Text,
  ImageBackground,
  Platform,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../config/Fonts';
import Color from '../../config/Color';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomTextInput from '../../component/CustomTextInput';
import CustomButton from '../../component/CustomButton';
import {showError, showSuccess} from '../../config/HelperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {signinRequest, resetSuccess} from '../../Redux/actions/authAction';
import { CommonActions } from '@react-navigation/native';

//Email and Password States
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, loading, success} = useSelector(state => state.auth);

  // Dispatch and Selector
  const dispatch = useDispatch();

  // Email Validation
  const validateEmail = email => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  // Validation conditions
  const SigninValidation = () => {
    if (email == '' || password == '') {
      showError('Kindly Input All fields');
      return;
    } else if (!validateEmail(email)) {
      showError('Please enter a valid email address');
      return;
    } else if (password.length < 8) {
      showError('Password Must Be At Least 8 Characters');
    } else {
      return new Promise((resolve, reject) => {
        dispatch(
          signinRequest(
            {email, password},
            data => {
              if (data.status == 200) {
                showSuccess('You Sign In successfully');
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'MainStack' }],
                  })
                )
              }
            },
            reject,
          ),
        );
      });
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={style.container}>
      <View style={style.textView}>
        <Text style={style.heading}>Welcome Back</Text>
        <Text style={style.subHeading}>Login to access your account</Text>
      </View>
      <Text style={style.emailText}>Email Address</Text>

      <CustomTextInput
        onChangeText={email => setEmail(email)}
        placeholder="Enter Your Email Address"
      />
      <Text style={style.passwordText}>Password</Text>
      <CustomTextInput
        onChangeText={password => setPassword(password)}
        placeholder="Enter Your Password"
        isPassword
      />
      <TouchableOpacity
        style={style.forgetView}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={style.forgetText}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton
        onPress={SigninValidation}
        title={'Login'}
        loading={loading}
      />
      <View style={style.LastView}>
        <Text style={style.text}>Don't Have an account?</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={style.signUpText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS == 'ios'
        ? getStatusBarHeight() + 40
        : getStatusBarHeight() + 20,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontFamily: Fonts.bold, fontSize: 24},
  subHeading: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Color.grey,
    paddingTop: 10,
  },
  emailText: {
    fontFamily: Fonts.regular,
    color: Color.grey,
    marginTop: Platform.OS == 'ios' ? 50 : 35,
  },
  passwordText: {
    fontFamily: Fonts.regular,
    color: Color.grey,
    marginTop: 10,
  },
  forgetView: {alignItems: 'flex-end'},

  forgetText: {fontFamily: Fonts.medium, color: Color.orange},

  LastView: {flexDirection: 'row', marginTop: 20, justifyContent: 'center'},

  text: {fontFamily: Fonts.regular, color: Color.grey},

  signUpText: {
    paddingLeft: 10,
    fontFamily: Fonts.bold,
    color: Color.blue,
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: Fonts.regular,
  },
});

export default SignIn;
