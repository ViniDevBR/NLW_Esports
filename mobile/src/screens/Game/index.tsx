import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import { GameParams } from '../../@types/navegation';
import { TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export function Game() {
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams
  
  function returnHome (){
    navigation.goBack()
  }
  const [infos, setInfos] = useState<DuoCardProps[]>([])
  const url = `http://192.168.0.3:3333/games/${game.id}[0]/ads` /*HOUSE 1*/ 
  const url2 = `http://192.168.15.165:3333/games/${game.id}/ads` /*HOUSE 2*/
  useEffect(() => {
    fetch(url2)
    .then(response => response.json())
    .then(data => setInfos(data));
  },[])
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
        {/* <ScrollView> */}
          <Image
            source={{uri: game.bannerUrl}}
            style={styles.cover}
            resizeMode='cover'
          />   
          <Heading
            title={game.title}
            subtitle='Conecte-se e comece a jogar'
          />
          <FlatList 
            data={infos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <DuoCard data={item}/>        
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            
          />
        {/* </ScrollView>  */}


        
      </SafeAreaView>
    </Background>
  )
}