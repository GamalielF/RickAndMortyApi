import { useEffect, useRef, useState } from 'react'
import Location from './components/Location'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import ResidentList from './components/ResidentList'

function App() {
  const [location, setLocation] = useState()
  //buscar por nombre 
  const [listNames, setListNames] = useState([]);
  const inputNameRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault()
      const newLocation = e.target.locationId.value
      const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
      axios.get(URL)
      .then((res)=>setLocation(res.data))
      .catch((err) => console.log(err))
      setListNames([]);
    // console.log(e.target.value)
    console.log(inputNameRef.current.value=newLocation.name)
    }
  useEffect(()=>{
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    
    axios.get(URL)
      .then((res)=> setLocation(res.data))
      .catch((err)=> console.log(err))
    
  },[])
  return (
    <div className="App">
      <div className="container">
        <div className="portal"></div>
        <div className="title">Rick<span>and</span>Morty</div>
        <div className="title middle">Rick<span>and</span>Morty</div>
        <div className="title bottom">Rick<span>and</span>Morty</div>
      </div>
      <div>
      </div>
      <form onSubmit={handleSubmit} className="relative top-0 z-10 w-full h-fit shadow-md shadow-slate-800 bg-base-200 p-10 flex justify-center mt-10">
        <div w-full max-w-xs>
          <h2 className="text-4xl uppercase label-text">Welcome to the crazy Universe!!!</h2>
          <input id='locationId' placeholder='Type a Location Id... ' className='border-2 border-black' type="text" />
          <button>Search <i className='bx bx-search-alt'></i> 
          </button>
          <Location location={location}></Location>
        </div>
      
      </form>
      {/* <Location location={location}/> */}
      
      <ResidentList location={location}></ResidentList>
    </div>
  )
}

export default App
