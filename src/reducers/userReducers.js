

export const userListReducer = (state = {users:[]}, action) => {
    switch (action.type){
        case 'user_list_request':
            return {loading: true, users: []}
        case 'user_list_success':
            return {loading: false, users: action.payload}
        case 'user_list_fail':
            return {loading: false, error: action.payload, users: action.payload}
        default:
            return state
    }
}

export const userInfoReducer = (state = {user:[]}, action) => {
    switch (action.type){
        case 'user_info_request':
            return {loading: true, user: []}
        case 'user_info_success':
            return {loading: false, user: action.payload}
        case 'user_info_fail':
            return {loading: false, error: action.payload, user: action.payload}
        default:
            return state
    }
}

export const userRepoReducer = (state = {repo:[]}, action) => {
    switch (action.type){
        case 'user_repo_request':
            return {loading: true, repo: []}
        case 'user_repo_success':
            return {loading: false, repo: action.payload}
        case 'user_repo_fail':
            return {loading: false, error: action.payload, repo: action.payload}
        default:
            return state
    }
}

