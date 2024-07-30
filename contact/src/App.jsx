import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Addnumer from './component/addnumer'
import ProgressComponent from './component/barre'
import AddContactButton from './component/contact'
import Head from './component/head'
function App() {


  return (
    <>
<Head/>

<div id="fnumer">
  <Addnumer/>
 
</div>
    </>
  )
}

export default App
