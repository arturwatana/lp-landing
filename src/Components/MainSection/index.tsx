import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WomanModel from "../../assets/Modelo-Banner-Principal.png"
import {motion} from "framer-motion"
import Header from "../Header";


export default function MainSection(){

    const constraints = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.3
            }
        }
    }
    return (
        <>
        <motion.section style={{background:"#ff6418",paddingTop:"5px", paddingBottom: "20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
             <Header/>
            <Flex maxW="1920px" minW="1200px"  justifyContent={"space-around"}  marginTop={"20px"} >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box  w="70%" color="#fff" fontSize={40} lineHeight={"10px"}>
                        <motion.p style={{letterSpacing:"3px"}}>Seu departamento pessoal</motion.p>
                        <motion.p  style={{letterSpacing:"8px",fontWeight:"bold"}}>descomplicado,</motion.p>
                        <motion.p style={{letterSpacing:"3px"}}>como tem que ser.</motion.p>
                        <motion.button variants={constraints}  whileHover={"hover"} style={{ cursor: "pointer", marginTop:"15px", border:"none", color:"#ff6418", background:"#fff", fontWeight:"bold", width:"190px",height:"50px", fontSize:"22px" ,borderRadius:"50px"}}>Seja LeafPay</motion.button>
                    </Box>
                    <Image src={WomanModel} h="500px"/>
                </Flex>
            </Flex>
        </motion.section>
        </>
    )
}