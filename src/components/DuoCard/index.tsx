import { Text, View, TouchableOpacity } from 'react-native';
import { Headset } from 'phosphor-react-native'
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
    id: string;
    hoursEnd: string;
    hoursStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
        <DuoInfo label="Nome" value={data.name}/>
        <DuoInfo label="Tempo de Jogo" value={`${data.yearsPlaying} anos`}/>
        <DuoInfo label="Disponibilidade" value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}/>
        <DuoInfo label="Voice Chat" value={data.useVoiceChannel ? "Sim" : "Não"} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}/>
        <TouchableOpacity style={styles.button} onPress={onConnect}>
            <Headset
                color={THEME.COLORS.TEXT}
                size={20}
            />
            <Text style={styles.buttonTitle}>
                Entrar
            </Text>
        </TouchableOpacity>
    </View>
  );
}