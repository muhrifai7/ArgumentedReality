import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../theme';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#05D9E8",
    paddingVertical: 10,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
    paddingHorizontal : 10
    // width:80
  },
  dark: {
    backgroundColor: colors.dark,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  light: {
    backgroundColor: colors.light,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  textLight: {
    color: colors.black2,
    fontWeight: 'bold',
  },
  textDark: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
