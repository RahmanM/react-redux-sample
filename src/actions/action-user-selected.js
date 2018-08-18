
const userSelected = (userId) => {   
    return {
        type: 'USER_SELECTED',
        payload: userId
    }
};

export default userSelected;