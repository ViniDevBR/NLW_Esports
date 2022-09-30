//COMPONENTES
import { DuoInfo } from '../DuoInfo';

//REACT
import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

//STYLES
import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps  {
  hourEnd: string,
  hourStart: string,
  id: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number
}
interface Props {
  data: DuoCardProps
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        title='Nome'
        value={data.name}
      />
      <DuoInfo 
        title='Tempo de jogo'
        value={`${data.yearsPlaying} Anos`}
      />
      <DuoInfo 
        title='Disponibilidade'
        value={`${data.weekDays.length} Dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo 
        title='Chamada de audio?'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={onConnect}  
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}