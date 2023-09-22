import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';
import GameIcon from '../../components/images/GameIcon/GameIcon';
import DifficultyModeButton from '../../components/buttons/DifficultyMode/DifficultyModeButton'
import NavButton from '../../components/buttons/Nav/NavButton'
import GameModes from '../../store/modes/Modes';
import FighterFullSizeImage from '../../components/images/FighterFullSize/FighterFullSizeImage';
import Board from '../../components/grid/board/board';


const ModeScreen = (props) => {
    const NORMAL = 100;
    const HARD = 80;
    const ELDER = 60;

    const defaultMode = GameModes[0];


    const [gameData, setGameData] = useState({ value: 0, mode: '' })
    const [gamemode, setGameMode] = useState(defaultMode);

    return <View style={styles.container}>
        <GameIcon />
        <Text style={styles.text}>GAME</Text>
        <Text style={styles.text}>MODE</Text>
        <View style={styles.image_and_buttons_container}>
            <View>
                <DifficultyModeButton
                    source={require('../../../assets/normal_mode.png')}
                    handler={() => { setGameMode(GameModes[0]); setGameData({ ...gameData, value: NORMAL, mode: 'normal' }); }}
                />
                <DifficultyModeButton
                    source={require('../../../assets/hard_mode.png')}
                    handler={() => { setGameMode(GameModes[1]); setGameData({ ...gameData, value: HARD, mode: 'hard' }); }}
                />
                <DifficultyModeButton
                    source={require('../../../assets/elder_mode.png')}
                    handler={() => { setGameMode(GameModes[2]); setGameData({ ...gameData, value: ELDER, mode: 'elder' }); }}
                />
            </View>
            <View style={styles.big_image}>
                <FighterFullSizeImage source={gamemode.big_image} />
                <Board name={gamemode.name} recovery={gamemode.recovery} attack={gamemode.attack}
                powergen={gamemode.powergen} toughness={gamemode.toughness}
                health={gamemode.health} level={gamemode.mode}
                />
            </View>
        </View>
        <NavButton text={gameData.value === 0 ? "SELECT DIFFICULTY" : 'NEXT SCREEN'}
            nav={gameData.value === 0 ? () => { } : () => { props.navigation.navigate('Character', gameData) }}
        />

    </View>
}

export default ModeScreen;
