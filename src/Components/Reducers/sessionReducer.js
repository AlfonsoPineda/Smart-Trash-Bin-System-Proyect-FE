const initState = {
    session: false,
    role: 'user',
    users: [
        { id: '', name: '', type: '', lastName: '', email: '', phone: '' }
    ],
};

// eslint-disable-next-line
const sessionReducer = (state = initState, action) => {
    return state;
};

export default sessionReducer;