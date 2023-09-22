const abilitiesReducer = (state, action) => {

    switch (action.type) {

        case "clear":
           
                return {...state, powergen:0,attack:0,recovery:0,health:100,toughness:0,totalPoints:state.maxPoints}
            
        case "powergen":
            if (state.totalPoints - action.payload < 0) {
                return state
            } else {

                return (state.powergen + action.payload > 100 || state.powergen + action.payload < 0) ?
                    state : { ...state, powergen: state.powergen + action.payload, totalPoints: state.totalPoints - action.payload }
            }
        case "attack":
            if (state.totalPoints - action.payload < 0) {
                return state
            } else {

                return (state.attack + action.payload > 100 || state.attack + action.payload < 0) ?
                    state : { ...state, attack: state.powergen + action.payload, totalPoints: state.totalPoints - action.payload }
            }

        case "recovery":
            if (state.totalPoints - action.payload < 0) {
                return state
            } else {

                return (state.recovery + action.payload > 100 || state.recovery + action.payload < 0) ?
                    state : { ...state, recovery: state.recovery + action.payload, totalPoints: state.totalPoints - action.payload }
            }

        case "health":

            if (state.totalPoints - action.payload < 0) {
                return state

            } else {
                return (state.health + action.payload > 100 || state.health + action.payload < 0) ?
                    state : { ...state, health: state.health + action.payload, totalPoints: state.totalPoints - action.payload }

            }

        case "toughness":

            if (state.totalPoints - action.payload < 0) {

                return state;
            } else {
                return (state.toughness + action.payload > 100 || state.toughness + action.payload < 0) ?
                    state : { ...state, toughness: state.toughness + action.payload, totalPoints: state.totalPoints - action.payload }

            }

        default:
            return state

    }

}

export default abilitiesReducer;