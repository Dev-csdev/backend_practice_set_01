import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [arr, setarr] = useState([])

  // proxy (imported axios and called with .get)
  // alternate option is whitelisting origins 
  useEffect (() => {
    axios.get('/api/test-arr')
    .then((response) => {
      setarr(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Frontend Testing</h1>
      <p>ARRAY: {arr.length}</p>

      {
        arr.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
