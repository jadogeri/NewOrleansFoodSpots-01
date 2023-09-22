const reducer = (state, action) => {

    switch (action.type) {

        case "k_health":
            if (state.kontestantHealth === 100) {
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} HEALTH IS FULL`,
                }

            } else {
                if (state.kontestantHealth  + action.payload > 100 )
                    return {
                        ...state,
                        kontestantText: ` ${state.kontestantName} HEALTH IS ALREADY NOW ${state.kontestantHealth} ADDED ${100-state.kontestantHealth}`,

                    }
          
                else
                    return {
                        ...state,
                        kontestantText: ` ${state.kontestantName} DOES NOT HAVE ENOUGH  TO HEAL `,

                    }
            }

        case "k_block":
            if (state.kontestantToughness - action.payload <= 0) {
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} CANNOT BLOCK ${state.shaokahn} ATTACKS`,
                }

            } else {
                if (state.kontestantToughness - action.payload > 0 && state.kontestantRecovery + action.payload < 100)
                    if(state.kontestantPowergen + action.payload > 100){
                        return {
                        ...state,
                        kontestantText: ` ${state.kontestantName} TOUGHNESS DECREASED BY ${action.payload} AND RECOVERY INCREASED TO ${tate.kontestantRecovery + action.payload}`,
                        }
                    }
                    else{
                        return {
                            ...state,
                            kontestPowergen: state.kontestantPowergen + action.payload,
                            kontestantText: ` ${state.kontestantName} TOUGHNESS DECREASED BY ${action.payload} AND RECOVERY INCREASED TO ${tate.kontestantRecovery + action.payload} AND POWERGEN INCREASED TO ${state.kontestantPowergen}`,
                            }
                    }
                else   
                    return {
                        ...state,
                        kontestantText: ` ${state.kontestantName} NOT ENOUGH TO BLOCK ${state.shaokahnName} IN THIS DUEL `,

                    }
            }

        case "k_powergen":      

            if (state.kontestPowergen > 30)
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} ATTACKED ${state.shaokahnName } BY 30 `,
                    kontestant : state.kontestantAttack - 30

                }
            else
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} NOT ENOUGH TO USE POWER ON ${state.shaokahnName} `,

                }



        case "k_attack":

            if (state.kontestantAttack > 20)
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} ATTACKED ${state.shaokahnName } BY 15 `,
                    kontestantAttack : state.kontestantAttack - 15

                }
            else
                return {
                    ...state,
                    kontestantText: ` ${state.kontestantName} NOT ENOUGH TO ATTACK ${state.shaokahnName} `,
                    kontestantAttack: state.kontestantAttack + 10

                }




        case "s_health":
            if (state.shaokahnHealth === 100) {
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} HEALTH IS FULL`,
                }

            } else {
                if ((state.shaokahnHealth + state.shaokahnRecovery * 0.1) + action.payload > 100)
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} HEALTH IS INKREDIBLE`,

                    }
                else if ((state.shaokahnHealth + state.shaokahnRecovery * 0.1) + action.payload < 100 &&
                    (state.shaokahnHealth + state.shaokahnRecovery * 0.1) + action.payload > 25)
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} HEALTH INCREASED BY ${(state.shaokahnRecovery * 0.1) + action.payload} , RECOVERY DEPLETED BY ${state.shaokahnRecovery / 2}`,
                        shaokahnHealth: (state.shaokahnHealth + state.shaokahnRecovery * 0.1) + action.payload,
                        shaokahnRecovery: state.shaokahnRecovery / 2

                    }
                else
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} NOT ENOUGH TO HEAL `,

                    }
            }



        case "s_block":
            if (state.shaokahnToughness === 100) {
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} TOUGHNESS IS FULL`,
                }

            } else {
                if ((state.shaokahnToughness + state.shaokahnRecovery * 0.1) + action.payload > 100)
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} TOUGHNESS IS FULL KANT BE IGNORED`,

                    }
                else if ((state.shaokahnToughness + state.shaokahnRecovery * 0.1) + action.payload < 100 &&
                    (state.shaokahnRecovery + action.payload < 100))
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} TOUGHNESS INCREASED BY ${(state.shaokahnRecovery * 0.1) + action.payload}, RECOVERY INCREASED BY ${action.payload}`,
                        shaokahnToughness: (state.shaokahnToughness + state.shaokahnRecovery * 0.1) + action.payload,
                        shaokahnRecovery: state.shaokahnRecovery + action.payload

                    }
                else
                    return {
                        ...state,
                        shaokahnText: ` ${state.shaokahnName} NOT ENOUGH TO BLOCK ${state.kontestantName} `,

                    }
            }
            case "s_powergen":      

            if (state.kontestPowergen > 30)
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} ATTACKED ${state.kontestantName } BY 30 `,
                    shaokahnAttack : state.shaokahnAttack - 30

                }
            else
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} NOT ENOUGH TO USE POWER ON ${state.kontestantName} `,
                    shaokahnAttack: state.shaokahnAttack + 10

                }



        case "s_attack":

            if (state.shaokahnAttack > 5)
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} ATTACKED ${state.kontestantName } BY 15 `,
                    shaokahnAttack : state.shaokahnAttack - 15

                }
            else
                return {
                    ...state,
                    shaokahnText: ` ${state.shaokahnName} NOT ENOUGH TO ATTACK ${state.kontestantName} `,
                    shaokahnAttack: state.shaokahnAttack + 10

                }


        default:

            return state
    }
}

export default reducer;