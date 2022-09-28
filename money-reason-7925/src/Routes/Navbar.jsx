import { Box, Button, ButtonGroup, Container, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css"
// import {FiSearch} from "react-icons/fi"
import {BsFillBagFill} from "react-icons/bs"

//  <script src="https://kit.fontawesome.com/35c2cdb561.js" crossorigin="anonymous"></script>


const Navbar = ()=>{
  
    return(
      <>
      <nav className="main-nav">
          <div className="logo">
            <h1><Link to={"/"}>J.CREW</Link></h1>
          </div>

          <div className="menu-link">
            <Link to={"/new"} >New</Link>
            <Link to={"/men" }>Men</Link>
            <Link to={"/kids"}>Kids</Link>
            <Link to={"/cashmere"} >Cashmere</Link>
            <Link to={"/"} >Home</Link>
            <Link to={"stories"} >Stories</Link>
            <Link to={"/sales"}>Sale</Link>
          </div>
          <div className="signin">
           <input placeholder="Search J.Crew"/>
          <Link to={"signin"} >Sign In</Link>
          <BsFillBagFill size={25} style={{cursor:"pointer"}}/>
          </div>
      </nav>
      <hr />
       <div>
        <img src="https://www.jcrew.com/in/plp/womens/features/new-arrivals?intcmp=newHP_video_1_women_new&om_i=newHP_p1" alt="" />
       </div>
      </>
       
    )
}
export default Navbar;