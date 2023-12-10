import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileContainer: {flexDirection: 'row', alignItems: 'center'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  iconStyles: {marginLeft: 'auto', color: '#79869F'},
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    marginHorizontal: 18,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStatus: {marginLeft: 10, flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {flexDirection: 'row', marginLeft: 27},
  userPostStatText: {marginLeft: 3, color: '#79869F'},
});

export default style;
