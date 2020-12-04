export const increment = (nm) => {
    return {
        type: 'INCREMENT',
        payload: nm 
    };
};


export const decrement = () => {
    return {
        type: 'INCREMENT'
    };
};


export const login = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const logout = () => {
    return {
        type: 'SIGN_OUT'
    };
};


export const namelogin = () => {
    return {
        type: 'SIGN_IN_NAME'
    };
};