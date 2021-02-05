import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { userList } from '../actions/userActions'
import { Table } from 'react-bootstrap'
import { useHistory } from "react-router-dom"

import Loader from './Loader'
import Message from './Message'

const UserList = ({userSerch}) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const userListInfo = useSelector( state => state.userList)
    const {loading, error, users} = userListInfo

    useEffect( ()=> {
        if(userSerch !== '') localStorage.setItem('search', JSON.stringify(userSerch))
        dispatch(userList(userSerch))
    }, [dispatch, userSerch])

    let list = users.items ? users.items : []

    const clickHandler = (login) => {
        history.push(`/user/${login}`)
    }

    const listUser = list.map( ({login, avatar_url} ) => {
        return  <tr key={login} onClick={()=>clickHandler(login)}>
                    <td><img className="avatar" src={avatar_url} alt={login}/></td>
                    <td>{login}</td>
                    <td>**</td>
                </tr>  
    })



    return (
        <>
            { loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : 
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>UserName</th>
                    <th>Repo</th>
                    </tr>
                </thead>
                <tbody>
                {listUser}
                </tbody>
            </Table>}
        </>
    )
}

export default UserList
