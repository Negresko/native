import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord, onClose, ...rest}: Props) {

    const [isCopping, setisCopping] = useState(false);

    async function handleCopyDiscordToClipboard(){
        setisCopping(true);
        await Clipboard.setStringAsync(discord);
        
        Alert.alert('Copiado para a área de Transferencia','Dirija-se ao discord e começa a Diversão');
        setisCopping(false);   
    }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                    <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500}/>
                </TouchableOpacity>
                <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold"/>
                <Heading title="Agora é só Jogar" subtitle="Divirta-se e conheça novas pessoas com o mesmo proposito que você!" style={{alignItems: 'center', marginTop: 24}}/>
                <Text style={styles.label}>
                    Adicione no Discord
                </Text>
                <TouchableOpacity style={styles.discordButton} onPress={handleCopyDiscordToClipboard} disabled={isCopping}>    
                    <Text style={styles.discord}>
                        {isCopping ? <ActivityIndicator /> : discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
}