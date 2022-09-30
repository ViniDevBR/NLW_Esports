//REACT
import { ColorValue, Text, View } from 'react-native';

//STYLES
import { THEME } from '../../theme';
import { styles } from './styles';

interface Props {
  title: string,
  value: string,
  colorValue?: ColorValue
}

export function DuoInfo({title, value, colorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {title}
      </Text>
      <Text 
        style={[styles.value, {color: colorValue}]}
        numberOfLines={1} >
        {value}
      </Text>
    </View>
  );
}