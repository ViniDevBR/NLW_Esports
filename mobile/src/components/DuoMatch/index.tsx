//COMPONENTES
import { Loading } from '../Loading';
import { Heading } from '../Heading';

//REACT
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';

//STYLES
import { styles } from './styles';
import { THEME } from '../../theme';

interface Props extends ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch({discord, onClose, ...rest}: Props) {
  const [isCopping, setIsCopping] = useState(false)
  
  async function copyDiscordUser() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert('Discord Copiado!', 'Usuario copiado para area de transferencia')
    setIsCopping(false)
  }
  
  return (
    <Modal
      animationType='fade'
      {...rest}
      transparent
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons 
              name='close'
              size={20}
              color= {THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight={'bold'}
          />
          <Heading 
            style={{ alignItems: 'center', padding: 32}}
            title="Let's play!"
            subtitle='Agora é só começar a jogar!'
          />
          <Text style={styles.discordTitle}>
            Adicione no Discord
          </Text>
          <TouchableOpacity 
            onPress={copyDiscordUser}
            style={styles.discordButton}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? <Loading /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}