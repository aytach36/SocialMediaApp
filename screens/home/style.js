import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(26),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
    position: 'relative',
  },
  messageNumberContainer: {
    position: 'absolute',
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(10),
    height: horizontalScale(10),
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#fff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal:horizontalScale(28)
  },
  userPostContainer:{
    marginHorizontal:horizontalScale(24 )

  }
});

export default style;
