import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Middle from './Components/Middle'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  
  <Header /> 
  <Middle/>
 <Footer/>
 
  </React.StrictMode>,
)
