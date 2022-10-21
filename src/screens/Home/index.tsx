import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
//import { GAMES } from '../../utils/games';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://192.168.1.2:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}/>
        <Heading title="Jogue com a Gente!" subtitle="Escolha o Game que deseja e encontre um canal para sua Diversão!" />
        <FlatList data={games} keyExtractor={item => item.id} renderItem={({item}) => (
          <GameCard data={item} onPress={() => handleOpenGame(item)}/>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
        />   
      </SafeAreaView>
    </Background>
  );
}