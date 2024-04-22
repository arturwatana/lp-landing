import { Box, Flex, Image } from "@chakra-ui/react";
import WomanModel from "../../assets/Modelo-Banner-Principal.png"
import {motion} from "framer-motion"
import Svg from "../../assets/Smile-Sobre-Banner-Principal.svg"


export default function MainSection(){

    const constraints = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.3
            }
        },
        float: {
            y: [0, 10, 0],
            transition: {
                repeat: Infinity,
                duration: 4,
            }
        }
  
    }
    return (
        <>
        <motion.section style={{background:"#ff6418",paddingTop:"5px", paddingBottom: "20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Flex maxW="1920px" minW="1200px"   marginTop={"20px"} >
                <Flex alignItems={"center"} gap="120px" justifyContent={"space-between"}>
                    <Box  w="70%" color="#fff" fontSize={40} lineHeight={"10px"}>
                        <motion.p style={{letterSpacing:"3px"}}>Seu departamento pessoal</motion.p>
                        <motion.p  style={{letterSpacing:"8px",fontWeight:"bold"}}>descomplicado,</motion.p>
                        <motion.p style={{letterSpacing:"3px"}}>como tem que ser.</motion.p>
                        <motion.button variants={constraints}  whileHover={"hover"} style={{ cursor: "pointer", marginTop:"15px", border:"none", color:"#ff6418", background:"#fff", fontWeight:"bold", width:"190px",height:"50px", fontSize:"22px" ,borderRadius:"50px"}}>Seja LeafPay</motion.button>
                    </Box>
                    <Box  w="40%" position={"relative"}>
                    <Image src={WomanModel} h="500px"/>
                    <motion.div animate="float" variants={constraints} style={{position:"absolute", left:"-20%", top: "60%"}} >
                        <Image src={Svg}  w="350px" top="60%" left="-20%"/>
                    </motion.div>
                    </Box>
                </Flex>
            </Flex>
        </motion.section>
        </>
    )
}