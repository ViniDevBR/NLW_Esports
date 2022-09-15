import { styles } from './styles';
import { View, Image, FlatList, ScrollView } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCards } from '../../components/GameCards';
import { GAMES } from '../../utils/games';

export function Home(){
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
        data={GAMES}
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