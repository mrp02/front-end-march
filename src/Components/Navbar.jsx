// import Navbar from './components/Navbar'
// import Navbar from './components/Logo'
import React from "react"
import {Link, NavLink} from "react-router-dom"
const Navbar = () =>{


const Navlinks = [

  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },

  {
    name: "Contact",
    path: "/contact"
  },

  {
    name: "Faqs",
    path: "/contact"
  },
]

const Navbar = () => {
  return (

  <div>
    <ul className="nav-bar">
        {Navlinks.map((link) =>(
        
        <Navlink
        
        className={({isActive}) =>
        isActive ?"":null  
      
      }
      key={link.name}
      to={link.path}>
      <li>{link.name}</li>
          </Navlink>        
        
        ))}
    </ul>
  </div>
  )
    }
  }
export default Navbar