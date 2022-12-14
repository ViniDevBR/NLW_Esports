//COMPONENTES
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch'; 

//REACT 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, ScrollView, FlatList, Text } from 'react-native';

//OUTROS
import { GameParams } from '../../@types/navegation';
import { Entypo } from '@expo/vector-icons';
import logoImg from '../../assets/logo-nlw-esports.png'

//STYLES
import { styles } from './styles';
import { THEME } from '../../theme';

export function Game() {
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams
  
  function returnHome (){
    navigation.goBack()
  }
  async function getDiscordUser(adsId: string) {
    const url3 = `http://192.168.15.165:3333/ads/${adsId}/discord`
    await fetch(url3)
    .then(response => response.json())
    .then(data => setDiscordMatch(data.discord));
  }
  
  const [infos, setInfos] = useState<DuoCardProps[]>([])
  const [discordMatch, setDiscordMatch] = useState('')

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


        <ScrollView
          style={styles.containerScroll}
          contentContainerStyle={styles.contentScroll}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{uri: game.bannerUrl}}
            style={styles.cover}
            resizeMode='cover'
          />   
          <Heading
            title={game.title}
            subtitle='Conecte-se e comece a jogar!'
          />
          <View style={styles.containerView}>
            <FlatList 
              data={infos}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <DuoCard 
                  onConnect={() => getDiscordUser(item.id)}
                  data={item}/>        
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[styles.contentList, infos.length === 0 && {flex: 1}]}
              ListEmptyComponent={() => (
                <Text style={styles.emptyList}>
                  N??o h?? an??ncios publicados.
                </Text>
              )}
            />
          </View>
          <DuoMatch 
            onClose={() => setDiscordMatch('')}
            visible={discordMatch.length > 0}
            discord={discordMatch}
          />
        </ScrollView>        
      </SafeAreaView>
    </Background>
  )
}