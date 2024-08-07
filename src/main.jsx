import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Home from './Home'
import Education from './Education'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Education />
    <Service />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
