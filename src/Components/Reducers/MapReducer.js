const initState = {
    lat: 19.4440,
    lon: -99.1641,
    direction: '',
    str: '',
    col: '',
    num: '',
    mun: '',
    state: '',
    pc: '',
    country: ''
};

// eslint-disable-next-line
const mapReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD_ADDR':
            return { // returning a copy of orignal state
                ...state, //copying the original state
                lat: action.address.lat,
                lon: action.address.lon,
                num: action.address.num,
                direction: action.address.direction,
                str: action.address.str,
                col: action.address.col,
                mun: action.address.mun,
                state: action.address.state,
                pc: action.address.pc,
                country: action.address.country,
            }
        default:
            return state;
    }

};

export default mapReducer;
