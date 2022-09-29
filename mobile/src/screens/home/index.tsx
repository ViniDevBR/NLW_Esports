//COMPONENTES
import { Heading } from '../../components/Heading';
import { GameCards, GameCardsProps } from '../../components/GameCards';
import { Background } from '../../components/Background';

//REACT
import { Image, FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

//OUTROS
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';


export function Home(){
  const url = 'http://192.168.0.3:3333/games' /*HOUSE 1*/ 
  const url2 = 'http://192.168.15.165:3333/games' /*HOUSE 2*/
  const [games, setGames] = useState<GameCardsProps[]>([])
  const navigation = useNavigation()

  function openGameCard ({id, title, bannerUrl}: GameCardsProps){
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch(url2)
    .then(response => response.json())
    .then(data => setGames(data));
  },[])
  return (

    <ScrollView>
      <Background>
        <SafeAreaView style = { styles.container }>
          <Image 
            source = { logoImg }
            style = { styles.logo }
          />
          <Heading
            title='Encontre seu duo'
            subtitle='Selecione o game que deseja jogar...'
          />
          <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <GameCards 
                data={item}
                onPress={() => openGameCard(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
        </SafeAreaView>
      </Background>
    </ScrollView>
  )
}