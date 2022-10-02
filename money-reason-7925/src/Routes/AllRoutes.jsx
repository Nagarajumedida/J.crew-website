import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Cashmere from "../Pages/Cashmere";
import Home from "../Pages/Home";
import Jcrew from "../Pages/Jcrew";
import Kids from "../Pages/Kids";
import Men from "../Pages/Men";
import New from "../Pages/New";
import Sales from "../Pages/Sales";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Stories from "../Pages/Stories";
import Women from "../Pages/Women";


export default function AllRoutes(){
    return(
        <Box>
            <Routes>
                <Route path="/" element={<Jcrew/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/cashmere" element={<Cashmere/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/sales" element={<Sales/>}/>
                <Route path="/stories" element={<Stories/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
        </Box>
    )
}