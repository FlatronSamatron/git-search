import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Table } from 'react-bootstrap'

import { userRepo } from '../actions/userActions'

import Loader from './Loader'
import Message from './Message'

const Repos = ({login,repoSearch}) => {

    const [repos, setRepos] = useState([])
    
    const userRepoSelector = useSelector( state => state.userRepo )
    const dispatch = useDispatch()

    const {loading, error} = userRepoSelector

    useEffect(()=>{
        dispatch(userRepo(login))
        setRepos(userRepoSelector.repo)
    },[dispatch,login,setRepos])


    React.useMemo(() => {
        let result = userRepoSelector.repo.filter(( el )=>{
            return el.name.toString().toLowerCase().trim().indexOf(repoSearch.toString().toLowerCase().trim()) >= 0
        })
        setRepos(result)
    }, [repoSearch,userRepoSelector.repo])


    const repo = repos.map( ({name,stargazers_count,forks_count,html_url}) => {
        return  <tr key={name}>
                    <td><a href={html_url}>{name}</a></td>
                    <td>{stargazers_count}/{forks_count}</td>
                </tr>  
    })

    return (
        <>{ loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                    <th>Repo Name</th>
                    <th>Forks/stars</th>
                    </tr>
                </thead>
                <tbody>
                {repo}
                </tbody>
            </Table>}
        </>
    )
}

export default Repos
