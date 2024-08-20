import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../config/Fonts';
import Color from '../../config/Color';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={style.container}>
      <View style={style.headerView}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            resizeMode="contain"
            style={style.menuIcon}
            source={require('../../assets/icons/menuIcon.png')}
          />
        </TouchableOpacity>
        <Text style={style.parentText}>
          News<Text style={style.childText}>App</Text>
        </Text>
        <Image
          source={require('../../assets/icons/ProfileImage.png')}
          style={style.ProfileImage}
        />
      </View>

      <ImageBackground
        source={require('../../assets/images/SliderImage.png')}
        resizeMode="contain"
        style={style.sliderSectionContainer}>
        <View style={style.ImageTextView}>
          <Text style={style.Heading}>TECHNOLOGY</Text>
          <Text style={style.TimeText}>3 min ago</Text>
        </View>

        <View style={style.DescriptionView}>
          <Text style={style.Description}>
            Microsoft launches a deepfake detecter tool ahead of US election
          </Text>
        </View>

        <View style={style.IconsMainView}>
          <View style={style.IconSubView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/chat.png')}
                style={style.ChatAndShareImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/saved.png')}
                style={style.SavedImage}
                resizeMode="contain"
                tintColor={Color.white}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/share.png')}
              style={style.ChatAndShareImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  menuIcon: {height: 35, width: 35, tintColor: 'black'},
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  parentText: {fontFamily: Fonts.bold, fontSize: 20},
  childText: {fontFamily: Fonts.regular},
  ProfileImage: {height: 40, width: 40},
  sliderSectionContainer: {
    width: width - 40,
    height: height / 2.5,
    marginTop: 15,
    paddingHorizontal: 30,
  },
  ImageTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  Heading: {fontFamily: Fonts.bold, fontSize: 12, color: Color.white},
  TimeText: {
    fontFamily: Fonts.regular,
    fontSize: 8,
    color: Color.white,
  },
  DescriptionView: {justifyContent: 'flex-end', flex: 1},
  Description: {fontFamily: Fonts.bold, fontSize: 18, color: Color.white},
  IconsMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  IconSubView: {flexDirection: 'row'},
  ChatAndShareImage: {height: 20, width: 25},
  SavedImage: {height: 20, width: 25, left: 10},
});

export default Home;
