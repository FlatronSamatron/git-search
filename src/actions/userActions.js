import axios from 'axios'

const token = 'e1f982f3dd0f30c50028d47f0565249c8e0684c2'

export const userList = (search) => async (dispatch) => {
    try{
        if(search){
            const {data} = await axios.get(`https://api.github.com/search/users?q=${search}&access_token=${token}`)
        


        // const getUser = async (login) => {
        //     const res = await axios.get(`https://api.github.com/users/${login}?access_token=d323eee49c8c93ab67f20bb5750df7594744968a`)
        //     return res.data
        // }


        const countRepo = data.items.map( async (el) => {
            const {data} = await axios.get(`https://api.github.com/users/${el.login}?access_token=${token}`)
            el.public_repos = data.public_repos
        })
        
        dispatch({ type : 'user_list_request' })

        dispatch({
            type: 'user_list_success',
            payload: data
        })
        }
    } catch (error) {
        dispatch({
            type: 'user_list_fail',
            payload: error.response && error.response.data.message ?
            error.response.data.errors : 'error'
        })
    }
}

export const userInfo = (login) => async (dispatch) => {
    try{
        const {data} = await axios.get(`https://api.github.com/users/${login}?access_token=${token}`)
        
        dispatch({ type : 'user_info_request' })

        dispatch({
            type: 'user_info_success',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'user_info_fail',
            payload: error.response && error.response.data.message ?
            error.response.data.errors : 'error'
        })
    }
}

export const userRepo = (login) => async (dispatch) => {
    try{
        const {data} = await axios.get(`https://api.github.com/users/${login}/repos?per_page=100&access_token=${token}`)
        
        dispatch({ type : 'user_repo_request' })

        dispatch({
            type: 'user_repo_success',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'user_repo_fail',
            payload: error.response && error.response.data.message ?
            error.response.data.errors : 'error'
        })
    }
}