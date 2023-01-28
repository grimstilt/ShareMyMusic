import React, { useState } from "react"
import axios from 'axios'

// define components here

const App = () => {
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleCall = (event) => {
    event.preventDefault()

    axios
      .get('http://localhost:3001/playlist')
      .then(response => {
        const playlistData = response.data
        console.log(playlistData)
      })
    
    console.log(url)
    setUrl("")
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
    console.log(url)
    
  }

  const handleUser = (Event) => {
    console.log(Event.target.value)
    setUsername(Event.target.value)
  }

  const handlePass = (Event) => {
    console.log(Event.target.value)
    setPassword(Event.target.value)
  }


  return (
    <div>
      <h1>Share your playlist url below: </h1>
      <form onSubmit={handleCall}>
        <input
          value={url}
          onChange={handleUrlChange}
        />
        <button type="submit">Go!</button>
      </form>
      <h2>Login below</h2>
      <div>Username <input type="text" value={username} onChange={handleUser} /></div>
      <div>Password <input type="text" value={password} onChange={handlePass} /></div>
      <button type="submit">login</button>
    </div>

  )

}
export default App
