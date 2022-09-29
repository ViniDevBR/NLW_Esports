import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 300,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  containerView: {
    width: '100%'
  },
  containerScroll: {
    flex: 1,
    width: '100%',
    padding: 0
  },
  contentScroll: {
    alignItems: 'center'
  },
  contentList: {
    alignSelf: 'flex-start',
    paddingHorizontal: 32,
    marginBottom: 30
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});