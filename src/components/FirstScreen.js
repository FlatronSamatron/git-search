import React from 'react'
import { InputGroup,FormControl } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import UserList from './UserList'




const FirstScreen = () => {

    const [search, setSearch] = useState('')

    useEffect(()=>{
        localStorage.getItem('search') ? setSearch(JSON.parse(localStorage.getItem('search'))) : setSearch('')
    }, [setSearch])

    const findUser = (user) => {
        const value = user.target.value
        setSearch(value)
    }


    return (
        <Container>
            <div className="search-panel">
                <h1>Github Searcher</h1>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search for Users"
                    onChange={(user)=>findUser(user)}
                    value={search}
                    />
                </InputGroup>
            </div>
            <div>
                <UserList userSerch={search} />
            </div>
        </Container>
    )
}

export default FirstScreen
