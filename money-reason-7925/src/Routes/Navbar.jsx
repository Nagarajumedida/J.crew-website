import { Box, Button, ButtonGroup, Container, Flex, Heading, Input, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css"
 <script src="https://kit.fontawesome.com/35c2cdb561.js" crossorigin="anonymous"></script>


const Navbar = ()=>{
    return(
        <Box className="box">
           
                <div className="nav1">
                 <div className="nav2">
            <h1 size='md' fontFamily="soleil,Helvetica,Arial,sans-serif"  fontSize={35} fontWeight={100}>J.CREW</h1>
            </div>
            <div className="nav3">
            <p>New</p>
          <p>Women</p>
        <p>Men</p>
         <p>Kids</p>
         <p>Cashmere</p>
      <p>Home</p>
         <p>Stories</p>
        <p>Sale</p>
            </div>
            <div className="nav4">
            <input placeholder="Search J.Crew"/>
             <p>SignIn</p>
             {/* <p><i class="fa-solid fa-bag-shopping">cart</i></p> */}
             
            
            </div>
            </div>
            <hr />
  
        </Box>
//            <Box className="Container"  >
//             <Box gap={10}>
//          <Flex minWidth='max-content' alignItems='center' gap='2'>
//          <Box p='2'>
// 
//   </Box>
//    <Box display="flex" gap={10}>
//      
//    </Box>
//    <Box display="flex" gap={10}>
//   
//    </Box>
// </Flex>
// </Box>
// </Box>     
    )
}
export default Navbar;