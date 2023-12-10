import React from 'react';
import {View, Image, Text} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import PropTypes from 'prop-types';
import style from './style';

const UserStory = ({firstName, profileImage}) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65}/>
      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;