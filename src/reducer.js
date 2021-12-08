export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //cd token: 'BQBqOjXSTvVsW3g0JIcxXgk7IwUHf_R7F9U1uFpUrNZNGq9IveoUZUHRBbULUEz6yaxjzRGnG1A8gHqivKcNQhgopuRGN4Fjx-t8ZdHpWvEnfFHtNGO7fPDP2QcEnLdGLfTN4I7_JHkLqJn_qS9wBp-nbstxd0K45szIF1ApeS7FHx2sXWOV',
};

const reducer= (state, action) => {
console.log(action);

switch(action.type) {
case 'SET_USER':
    return{
        ...state,
        user:action.user,
    };
case 'SET_TOKEN':
    return{
        ...state,
        token: action.token,
    };
case "SET_PLAYLISTS":
    return{
        ...state,
        playlists: action.playlists,
    };
    case 'SET_DISCOVER_WEEKLY':
        return {...state,
        discover_weekly: action.discover_weekly,}

    default:
        return state;
}
};
export default reducer;