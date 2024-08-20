import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../config/Color';
import Fonts from '../config/Fonts';

const {width} = Dimensions.get('window');

const CustomTextInput = ({isPassword, placeholder, onChangeText}) => {
  const [hideText, setHideText] = useState(isPassword);
  const [isPress, setIsPress] = useState(false);
  return (
    <View
      style={[
        style.Container,
        {borderColor: isPress ? Color.orange : Color.grey},
      ]}>
      <TextInput
        style={style.InputField}
        onFocus={() => setIsPress(true)}
        onBlur={() => setIsPress(false)}
        placeholderTextColor={Color.grey}
        secureTextEntry={hideText}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {isPassword && (
        <TouchableOpacity
          style={style.ImageView}
          onPress={() => setHideText(!hideText)}>
          <Image
            source={
              !hideText
                ? require('../assets/icons/eye.png')
                : require('../assets/icons/eyeClose.png')
            }
            style={style.ImageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: width - 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderRadius: 30,
    borderWidth: 1,

    backgroundColor: Color.white,
  },
  InputField: {
    fontFamily: Fonts.regular,
    height: 40,
    paddingHorizontal: 10,
    alignSelf: 'center',
    flex: 1,
  },
  ImageView: {
    paddingLeft: 15,
  },
  ImageStyle: {height: 15, width: 20},
});

export default CustomTextInput;
