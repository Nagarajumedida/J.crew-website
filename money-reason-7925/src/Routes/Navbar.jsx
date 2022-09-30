import { Box, Button, ButtonGroup, Container, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CashmereHover from "../Components/CashmereHover";
import HomeHover from "../Components/HomeHover";
import KidsHover from "../Components/KidsHover";
import MenHover from "../Components/MenHover";
import NewHover from "../Components/NewHover";
import SalesHover from "../Components/SalesHover";
import StoriesHover from "../Components/StoriesHover";
import WomenHover from "../Components/WomenHover";
import "./Navbar.css"
// import {FiSearch} from "react-icons/fi"
// import {BsFillBagFill} from "react-icons/bs"
// import  NewHover  from "../HoverComponents/NewHover"
// import CashmereHover from "../HoverComponents/CashmereHover";
// import HomeHover from "../HoverComponents/HomeHover";
// import SalesHover from "../HoverComponents/SalesHover";
// import MenHover from "../HoverComponents/MenHover";
// import KidsHover from "../HoverComponents/KidsHover";
// import StoriesHover from "../HoverComponents/StoriesHover";
// import WomenHover from "../HoverComponents/WomenHover";

//  <script src="https://kit.fontawesome.com/35c2cdb561.js" crossorigin="anonymous"></script>


const Navbar = ()=>{
  
    return(
      <>
      <nav className="main-nav">
          <div className="logo">
            <h1><Link to={"/"}>J.CREW</Link></h1>
          </div>

          <div className="menu-link">
            {/* <Link to={"/new"} >New</Link>
            <Link to={"/women"}>Women</Link>
            <Link to={"/men" }>Men</Link>
            <Link to={"/kids"}>Kids</Link>
            <Link to={"/cashmere"} >Cashmere</Link>
            <Link to={"/home"} >Home</Link>
            <Link to={"stories"} >Stories</Link>
            <Link to={"/sales"}>Sale</Link> */}

         <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              New
            </h3>
            <div id="one1" className="dropdown-content">
              <NewHover />
            </div>
          </div>

          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Women
            </h3>
            <div id="one1" className="dropdown-content">
              <WomenHover/>
            </div>
          </div>

          <div className="dropdown" >
            <h3 id="navone" className="dropbtn">
              Men
            </h3>
            <div id="one1" className="dropdown-content" style={{marginLeft:"-500px"}}>
              <MenHover />
            </div>
          </div>

          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Kids
            </h3>
            <div id="one1" className="dropdown-content" style={{marginLeft:"-600px"}}>
              <KidsHover />
            </div>
          </div>

          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Cashmere
            </h3>
            <div id="one1" className="dropdown-content">
              <CashmereHover/>
            </div>
          </div>
          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Home
            </h3>
            <div id="one1" className="dropdown-content" style={{marginLeft:"-800px"}}>
              <HomeHover/>
            </div>
          </div>

          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Stories
            </h3>
            <div id="one1" className="dropdown-content" style={{marginLeft:"-800px"}}>
              <StoriesHover />
            </div>
          </div>

          <div className="dropdown">
            <h3 id="navone" className="dropbtn">
              Sales
            </h3>
            <div id="one1" className="dropdown-content" style={{marginLeft:"-1000px"}}>
              <SalesHover />
            </div>
          </div>

          </div>
          <div className="signin">
           <input placeholder="Search J.Crew"/>
           <Link to={"signup"}>Signup</Link>
          <Link to={"signin"} >Login</Link>
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