import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container,Row,Col,InputGroup,FormControl,Image,ListGroup } from 'react-bootstrap'

import { userInfo } from '../actions/userActions'
import Repos from './Repos'

import Loader from './Loader'
import Message from './Message'

const SecondScreen = ({match}) => {
    const userLogin = match.params.login

    const [repoSearch, setRepoSearch] = useState('')

    const userInfoSelector = useSelector( state => state.userInfo )
    const dispatch = useDispatch()

    const {loading, error, user} = userInfoSelector
    

    useEffect(()=>{
        dispatch(userInfo(userLogin))
    },[dispatch,userLogin])

    const {avatar_url, login, email, location, created_at, followers, following, bio} = user
    const joinDate = new Date(created_at).toLocaleString()
    return (
        <Container>{ loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :
                    <div className="search-panel">
                        <h1>Github Searcher</h1>
                        <Row >
                            <Col md={6} className="p-3">
                                <Image className="user-info-img" fluid src={avatar_url}/>
                            </Col>
                            <Col md={6} className="p-3">
                                <ListGroup className="text-left">
                                    <ListGroup.Item><strong>Login:</strong> {login}</ListGroup.Item>
                                    <ListGroup.Item><strong>Email:</strong> {email ? email : 'none'}</ListGroup.Item>
                                    <ListGroup.Item><strong>Location:</strong> {location ? location : 'none'}</ListGroup.Item>
                                    <ListGroup.Item><strong>Join date:</strong> {joinDate}</ListGroup.Item>
                                    <ListGroup.Item><strong>Followers:</strong> {followers}</ListGroup.Item>
                                    <ListGroup.Item><strong>Following:</strong> {following}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={12}>
                                <p>{bio}</p>
                            </Col>
                        </Row>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search for User's Repositories"
                            value={repoSearch}
                            onChange={(e)=>setRepoSearch(e.target.value)}
                            />
                        </InputGroup>
                        <Repos login={login} repoSearch={repoSearch}/>
                    </div>}
        </Container>
    )
}

export default SecondScreen
