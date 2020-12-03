import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Searchbar, FormContainer, SearchButton, UserListContainer,
  Message, UserItem
} from './home.styled'

const API_URL = process.env.REACT_APP_API_URL
const ACCESS_KEY = process.env.REACT_APP_API_KEY


const HomeContainer = () =>  {

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

  const changeSearch = (e) => setQuery(e.target.value)

  return (
  <Container>
    <FormContainer>
    <Searchbar value={query} onChange={changeSearch} type="text"/>
      <SearchButton onClick={search}>Search</SearchButton>
    </FormContainer>
    {
      users.length && !loading ? (
        <UserListContainer>
          {
            users.map((user) => <UserItem id={user.id}>
              <img src={user.profile_image.medium} alt={user.name}/>
              <div className="info">
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
              <div className="footer">
                <Link to={`/user/${user.id}`}>Photos</Link>
              </div>
              </div>
              </UserItem>)
          }
        </UserListContainer>
      )
        : <Message>{getCurrentMessage()}</Message>
    }
  </Container>
)
}

export default HomeContainer

