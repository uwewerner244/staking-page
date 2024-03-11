import { FC } from 'react'
import "./Header-nav.scss";
import YourComponent from "./Animated-text";


const Header_navbar: FC = () =>  {
  return (
    <div>
      <div id="topnav">
         {/* <a id="logo" className="nav-link" href="#">MY NAME</a> */}
         <a className="nav-link" href="#">NYX CIPHER</a>
         <a className="nav-link" href="#"><YourComponent /></a>
         <a className="nav-link" href="#">Service</a>
         <a className="nav-link" href="#">Partner</a>
         <a className="nav-link" href="#">Development</a>
         <a className="nav-link" href="#">Data</a>

         <div className="topnav-right">
         <a className="nav-link" href="#">Docs</a>
         <button className="nav-button">Launch App</button>
         <button className="nav-button">Contract address</button>
         </div>
      </div>
    </div>
  )
}

export default Header_navbar;