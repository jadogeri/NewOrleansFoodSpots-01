import React, { useReducer } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native'
import GameModes from '../../store/modes/Modes';
import ScoreBoard from '../../components/grid/scoreboard/ScoreBoard';
import styles from './styles';
import FighterFullSizeImage from '../../components/images/FighterFullSize/FighterFullSizeImage';
import ControllerButton from '../../components/buttons/ControllerButton/ControllerButton';
import StatusBoard from '../../components/grid/status/StatusBoard';
import reducer from '../../reducers/fighterReducer/actionReducer';

let shaokahnmoves = ['s_health', 's_block', 's_powergen', 's_attack']

const shaokahnRandomMove = () => { return shaokahnmoves[Math.floor(Math.random() * shaokahnmoves.length)] }



const gameOverPrompt = (health, kontestantName) => {

    const verdict = [` ${kontestantName} WON`, `${kontestantName} LOST`]

    if (health > 0)
        return verdict[0]
    else
        return verdict[1]
}

const StageScreen = (props) => {
    let health = props.navigation.getParam('health');
    let kontestantRecovery = props.navigation.getParam('recovery')
    let kontestantPowergen = props.navigation.getParam('powergen')
    let kontestantToughness = props.navigation.getParam('toughness')
    let kontestantAttack = props.navigation.getParam('attack')
    let kontestantName = props.navigation.getParam('name')
    let kontestant_big_image = props.navigation.getParam('big_image');
    let mode = props.navigation.getParam('shaokahn');

    let shaokahn = GameModes.find((item) => {
        if (item.mode === mode) {
            return item
        }
    });

    const [state, dispatch] = useReducer(reducer,
        {
            kontestantName: kontestantName, kontestantHealth: health, kontestantRecovery: kontestantRecovery,
            kontestantToughness: kontestantToughness, kontestantAttack: kontestantAttack, kontestantPowergen: kontestantPowergen,
            kontestant_big_image: kontestant_big_image, kontestantText: 'FIGHT',
            shaokahnName: shaokahn.name, shaokahnHealth: shaokahn.health, shaokahnRecovery: shaokahn.recovery,
            shaokahnToughness: shaokahn.toughness, shaokahnAttack: shaokahn.attack, shaokahnPowergen: shaokahn.powergen,
            shaokahn_big_image: shaokahn.big_image, shaokahnText: 'FIGHT',
        })

    return <View>
        <ImageBackground source={require('../../../assets/stage/fightstage.gif')}>
            <Text> im stage screen</Text>

            <View style={styles.board_container}>
                <ScoreBoard name={state.kontestantName} recovery={state.kontestantRecovery} health={state.kontestantHealth}
                    toughness={state.kontestantToughness} powergen={state.kontestantPowergen} attack={state.kontestantAttack}
                />
                <FighterFullSizeImage source={state.kontestant_big_image} />
                <ScoreBoard name={state.shaokahnName} recovery={state.shaokahnRecovery} health={state.shaokahnHealth}
                    toughness={state.shaokahnToughness} powergen={state.shaokahnPowergen} attack={state.shaokahnAttack}
                />
                <FighterFullSizeImage source={state.shaokahn_big_image} />

            </View>
            /* <View style={{ borderColor: 'black', flex: 0.75 }}>

                <StatusBoard textOnScreen={(state.kontestantHealth > 0 && state.shaokahnHealth > 0) ?
                    state.kontestantText : gameOverPrompt(state.kontestantHealth, state.kontestantName)} />
                <StatusBoard textOnScreen={(state.kontestantHealth > 0 && state.shaokahnHealth > 0) ?
                    state.shaokahnText : gameOverPrompt(state.shaokahnHealth, state.shaokahnName)} />
            </View> */

            <View style={styles.button_container}>
                <View style={styles.two_button_container}>
                    <ControllerButton buttonHandler={() => {
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: 'k_health', payload: 5 })
                        };
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: shaokahnRandomMove(), payload: 5 })
                        };
                    }}
                        source={require('../../../assets/buttons/ps5x.jpg')} text="HEALTH" />

                    <ControllerButton   buttonHandler={() => {
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: 'k_block', payload: 5 })
                        };
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: shaokahnRandomMove(), payload: 5 })
                        };
                    }}
                    source={require('../../../assets/buttons/ps5triangle.jpg')} text="BLOCK" />
                </View>
                <View style={styles.two_button_container}>
                    <ControllerButton  buttonHandler={() => {
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: 'k_attack', payload: 5 })
                        };
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: shaokahnRandomMove(), payload: 5 })
                        };
                    }}
                    source={require('../../../assets/buttons/ps5square.jpg')} text="ATTACK" />
                    <ControllerButton  buttonHandler={() => {
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: 'k_powergen', payload: 10 })
                        };
                        if (state.kontestantHealth > 0 && state.shaokahnHealth > 0) {
                            dispatch({ type: shaokahnRandomMove(), payload: 10 })
                        };
                    }}
                    source={require('../../../assets/buttons/ps5circle.jpg')} text="POWER GEN" />
                </View>

            </View>

        </ImageBackground>
    </View>
}

export default StageScreen;