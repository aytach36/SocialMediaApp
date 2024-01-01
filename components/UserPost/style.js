import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileContainer: {flexDirection: 'row', alignItems: 'center'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  iconStyles: {marginLeft: 'auto', color: '#79869F'},
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop:verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    marginHorizontal: horizontalScale(18),
    paddingBottom: verticalScale(20),
    borderBottomWidth: verticalScale(1),
    borderBottomColor: '#EFF2F6',
  },
  userPostStatus: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {flexDirection: 'row', marginLeft: horizontalScale(27)},
  userPostStatText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
