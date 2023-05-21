import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <div className='App'>
       <Navbar/>
       <ItemListContainer greeting={'Bienvenid@ a Bordageek! 💜'}/>
      </div>
    </>
  )
}

export default App