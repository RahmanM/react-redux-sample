function ActiveUserReducer (state = null, action) {
     switch (action.type) {
        case 'USER_SELECTED':
            var user = getUser(action.payload);
            if(!user){
                return null;
            }
            return user;
    }
    return state;
}

function getUser(userId){
    var users = [
        {userId:1, name: "rahman mahmoodi", department: "IT", email:"rahman@it.com"},
        {userId:2, name: "hosha mahmoodi", department: "Education", email:"hosha@education.com"},
    ];

    return users.filter(f=> f.userId === userId)[0];
}

export default ActiveUserReducer;