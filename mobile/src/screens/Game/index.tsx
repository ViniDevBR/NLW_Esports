import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navegation';
import { TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';

export function Game() {
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams
  
  function returnHome (){
    navigation.goBack()
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={returnHome}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right}/>
        </View>   
        <Image
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode='cover'
        />   
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar'
        />
      </SafeAreaView>
    </Background>
  )
}