import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Searchbar, FormContainer, SearchButton, UserListContainer,
  Message, UserItem, StyledLink
} from './home.styled'
import { setUser } from '../../features/user/userSlice'
import { connect } from 'react-redux'

const API_URL = process.env.REACT_APP_API_URL
const ACCESS_KEY = process.env.REACT_APP_API_KEY

const mapDispatch = { setUser }

const HomeContainer = ({ setUser }) =>  {

  const [query, setQuery] = React.useState('')
  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const search = async (e) => {
    e.preventDefault()
    setLoading(true)
    const url = `${API_URL}/search/users?page=1&query=${query}&client_id=${ACCESS_KEY}`
    const response = await fetch(url)
    const users = await response.json()

    if(response) {
      setUsers(users.results)
    }
    setLoading(false)
  }

  const getCurrentMessage = () => {
    const searchMessage = 'Search for an user'
    const loadingMessage = 'Loading users'

    return loading ? loadingMessage : searchMessage
  }
  
  const getCurrentSubMessage = () => {
    const searchMessage = 'Something great is about to happen'
    const loadingMessage = 'Loading users'

    return loading ? loadingMessage : searchMessage
  }

  const changeSearch = (e) => setQuery(e.target.value)

  return (
  <Container>
    <FormContainer>
    <Searchbar value={query} onChange={changeSearch} type="text"/>
      <SearchButton onClick={search}/>
    </FormContainer>
    {
      users.length && !loading ? (
        <UserListContainer>
          {
            users.map((user) => <UserItem id={user.id}>
              <img src={user.profile_image.medium} alt={user.name}/>
              <div className="info">
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <div className="footer">
                <StyledLink onClick={() => setUser(user)} to={`/user/${user.username}`}/>
              </div>
              </div>
              </UserItem>)
          }
        </UserListContainer>
      )
      : <Message>
        {getCurrentMessage()}
        <p>{getCurrentSubMessage()}</p>
        </Message>
    }
  </Container>
)
}

export default connect(null, mapDispatch)(HomeContainer)

