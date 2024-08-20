import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Color from '../../config/Color';
import CustomTextInput from '../../component/CustomTextInput';
import CustomButton from '../../component/CustomButton';
import {showError, showSuccess} from '../../config/HelperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {signupRequest, resetSuccess} from '../../Redux/actions/authAction';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Dispatch and Selector
  const dispatch = useDispatch();
  const {error, loading, success} = useSelector(state => state.auth);
  console.log(success, 'sucess');

  useEffect(() => {
    console.log('me yhan hoom');
  }, []);

  // Email Validation
  const validateEmail = email => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  // Fields validations
  const SignUpValidation = () => {
    if (email == '' || password == '' || name == '') {
      showError('Kindly Input All fields');
      return;
    } else if (name.length < 3 || name.length > 15) {
      showError('User Name must be between 3 and 15 character ');
    } else if (!validateEmail(email)) {
      showError('Please enter a valid email address');
      return;
    } else if (password.length < 8) {
      showError('Password Must Be At Least 8 Characters');
    } else {
      return new Promise((resolve, reject) => {
        dispatch(
          signupRequest(
            {name, email, password},
            data => {
              console.log('CHECKING DATA', data);
              if (data.status == 201) {
                showSuccess('You Sign Up successfully');
                navigation.navigate('SignIn');
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
        <Text style={style.heading}>Welcome </Text>
        <Text style={style.subHeading}>
          Sign Up Your account and explore the app
        </Text>
      </View>
      <Text style={style.emailText}>User Name</Text>
      <CustomTextInput
        onChangeText={name => setName(name)}
        placeholder="Enter Your Name"
      />
      <Text style={style.subHeading}>Email Address</Text>
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
      <CustomButton
        onPress={SignUpValidation}
        title={'Sign Up'}
        loading={loading}
      />

      <View style={style.LastView}>
        <Text style={style.text}>Already Have An Account</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={style.signUpText}>
            Sign In
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

export default SignUp;
