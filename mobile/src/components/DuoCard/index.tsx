import { TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';
// import {  } from '';
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
}

export function DuoCard({ data }: Props) {
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
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}