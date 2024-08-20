import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../config/Fonts';
import Color from '../../config/Color';
import CustomTextInput from '../../component/CustomTextInput';
import CustomButton from '../../component/CustomButton';

const ForgetPassword = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={style.container}>
      <View style={style.headerShow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={style.backIcon}
            source={require('../../assets/icons/backIcon.png')}
          />
        </TouchableOpacity>
        <View style={style.homeTextView}>
          <Text style={style.homeText}>Forget Password</Text>
        </View>
      </View>
      <Text style={style.emailText}>Email Address</Text>
      <CustomTextInput placeholder={'Enter Your Email'} />
      <CustomButton title={'Submit'} />
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
  headerShow: {flexDirection: 'row', alignItems: 'centers'},
  backIcon: {height: 40, width: 40},
  homeTextView: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontFamily: Fonts.bold,
    fontSize: 25,
    alignItems: 'center',
    paddingRight: 20,
  },
  emailText: {
    fontFamily: Fonts.regular,
    color: Color.grey,
    marginTop: Platform.OS == 'ios' ? 50 : 35,
    marginBottom: 15
  },
});

export default ForgetPassword;
