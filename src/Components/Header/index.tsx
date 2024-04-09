import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import Leafpay from "../../assets/Logo-Leafpay-Branco.png"
import {motion} from "framer-motion"

export default function Header(){

    const constraints = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.4
            }
        }
    }

    return (
        <>
            <Flex direction={"row"} justifyContent={"center"}  >
                <Flex maxW="1920px" minW="1000px" alignItems={"center"} justifyContent={"space-between"}>
                    <a href="/">
                        <Image src={Leafpay} w="150px" mt="8px" style={{cursor:"pointer"}}/>
                    </a>
                    <chakra.ul listStyleType={"none"} display={"flex"} fontSize={20}    justifyContent={"center"} alignItems={"center"} h="100%" color={"#fff"} gap="70px">
                        <motion.li  whileHover={"hover"} variants={constraints} style={{cursor: "pointer"}} >
                            Contato
                        </motion.li>
                        <motion.li whileHover={"hover"} variants={constraints} style={{cursor: "pointer"}}>
                            Sobre
                        </motion.li >
                        <motion.li whileHover={"hover"} variants={constraints} style={{cursor: "pointer", border:"1px solid white", borderRadius: "50px", padding:"12px 35px"} }>
                            Portal do Cliente
                        </motion.li>
                    </chakra.ul>
                </Flex>
            </Flex>
        </>
    )
}