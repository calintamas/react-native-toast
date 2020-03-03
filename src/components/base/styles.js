import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const HEIGHT = 60;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    height: HEIGHT,
    width: '90%',
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowColor: "#343434",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10.00,
    elevation: 3
  },
  borderLeft: {
    borderLeftWidth: 5,
    borderLeftColor: colors.alto
  },
  iconContainer: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  closeButtonContainer: {
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon: {
    width: 9,
    height: 9
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3
  },
  text2: {
    fontSize: 10,
    color: colors.dustyGray
  }
});
