//REACT
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//STYLES
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardsProps{
  id: string,
  title: string,
  _count: {
    ads: number
  },
  bannerUrl: string
}
interface Props extends TouchableOpacityProps{
  data: GameCardsProps
}

export function GameCards({data, ...rest}:Props) {
  return (
    <TouchableOpacity style={styles.container}{...rest}>
      <ImageBackground
      source={{uri: data.bannerUrl}}
      style={styles.cover}
      >
        <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}>
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>

  );
}