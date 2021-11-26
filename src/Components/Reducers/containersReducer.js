const initState = {
    id: '',
    lat: '',
    lon: '',
    type: '',
    containers: [
        { id: '1', name: 'Basura', type: 'Organico', lat: '', lon: '', capacity: '55', direction: 'C. Alfonso Herrera 122, San Rafael, Cuauhtémoc, 06470 Ciudad de México, CDMX, México' },
        { id: '2', name: 'Deshechos', type: 'Inorganico', lat: '', lon: '', capacity: '20', direction: 'Nogal 44, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '3', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '80', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '4', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '15', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '5', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '30', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '6', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '50', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '7', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '70', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '8', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '60', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '9', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '99', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '10', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '30', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
        { id: '2', name: 'contenedor', type: 'Papel', lat: '', lon: '', capacity: '10', direction: 'C. Cedro 235, Sta María la Ribera, Cuauhtémoc, 06400 Ciudad de México, CDMX, México' },
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

        default:
            return state;
    }
};

export default containersReducer;