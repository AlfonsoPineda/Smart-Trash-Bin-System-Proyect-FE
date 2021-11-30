const initState = {
    id: '',
    lat: '',
    lon: '',
    type: '',
    containers: [

    ],
};

// eslint-disable-next-line
const containersReducer = (state = initState, action) => {
    switch (action.type) {

        case 'ADD_CONT':
            return { // returning a copy of orignal state
                ...state, //copying the original state
                lat: action.container.lat,
                lon: action.container.lon,
            }

        case 'SET_ID':
            return { // returning a copy of orignal state
                ...state, //copying the original state
                id: action.container.id,
            }

        case 'SET_TYPE':
            return { // returning a copy of orignal state
                ...state, //copying the original state
                type: action.container.type,
            }
        case 'GET_CONT':
            return { // returning a copy of orignal state
                ...state, //copying the original state
                containers: action.container.containers,
            }

        default:
            return state;
    }
};

export default containersReducer;
