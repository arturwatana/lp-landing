import { Flex, Image, Text } from "@chakra-ui/react";
import {motion} from "framer-motion"
import SobreNos from "../../assets/Image-Sobre-Nos.png"
import Svg from "../../assets/Smile-Sobre-Banner-Principal.svg"
import Lg from "../../assets/Logo-LG-Sistemas-png-1.png"
import Yube from "../../assets/yube.png"
import Thomson from "../../assets/Logo-thomson-reuters-png-1.png"
import OiTchau from "../../assets/oitchau.png"


export default function FourthSection(){
    const constraints = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.4
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
            <Flex  minH="540px" justifyContent={"center"}  py="60px">
                <Flex  background="#ff6418" w="70%" h="470px" px="30px" py="10px"  rounded={"45px"}>
                    <Flex minW="60%" position={"relative"} justifyContent={"center"}>
                        <Image  src={SobreNos}/>
                        <motion.div animate="float" variants={constraints} style={{position:"absolute", left:"10%", top: "55%"}} >
                            <Image src={Svg}  w="300px" />
                        </motion.div>
                    </Flex>
                    <Flex flexDir={"column"} w="40%" color="#fff" pt="10px"  textAlign={"left"} >
                        <Flex gap="10px" fontSize={40} >
                            <Text fontWeight={"bold"} marginBlockStart={0} marginBlockEnd={0}>Sobre</Text>
                            <Text marginBlockEnd={0} marginBlockStart={0}>nós</Text>
                        </Flex>
                        <Text fontSize={18} w="75%" letterSpacing={"1px"}>A LeafPay existe para fazer a gestão completa do seu departamento pessoal de forma descomplicada. O nosso atendimento consultivo, ágil e humano é o que te deixa com um sorriso no rosto e livre para se dedicar ao seu negócio!</Text>
                        <motion.p whileHover={"hover"} variants={constraints} style={{textAlign:"center",cursor: "pointer", border:"1px solid white", borderRadius: "50px", padding:"10px 25px" , width: "120px"} }>
                            Saiba mais
                        </motion.p>
                    </Flex>
                </Flex>    
            </Flex>        
            <Flex minH="330px" justifyContent={"center"} >
                <Flex  background={"#F5F5F5"} h={"180px"} rounded="50px" w="74%">
                    <Flex fontSize={33} w="30%" flexDir="column"color="gray"justifyContent={"center"}  pl="120px" textAlign={"left"}  letterSpacing={"3px"}>
                        <Text fontWeight={"bold"} marginBlockEnd={0} marginBlockStart={0}>Nossos</Text>
                        <Text marginBlockEnd={0} marginBlockStart={0}>Parceiros</Text>
                    </Flex>
                    <Flex  w="70%" justifyContent={"center"} alignItems={"center"} gap="50px">
                        <Image h="70px" fit={"contain"} src={Lg}/>
                        <Image h="50px" fit={"contain"} src={OiTchau}/>
                        <Image h="50px" fit={"contain"} src={Yube}/>
                        <Image h="70px" fit={"contain"} src={Thomson}/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
} 