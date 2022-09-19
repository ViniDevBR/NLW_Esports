import { styles } from './styles';
import { View, Image, FlatList, ScrollView } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCards, GameCardsProps } from '../../components/GameCards';
import { useEffect, useState } from 'react';
import { response } from 'express';

export function Home(){
  const url = 'https://192.168.0.3:3333/games'
  const [games, setGames] = useState<GameCardsProps[]>([])
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setGames(data));
  },[])
  return (
    <ScrollView>
      <View style = { styles.container }>
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
          />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </View>
    </ScrollView>
  )
}