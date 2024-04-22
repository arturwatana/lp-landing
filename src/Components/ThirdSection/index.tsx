import { Flex, Image, Text } from "@chakra-ui/react";
import SoftwareCard from "../SoftwareCard";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Dashboard from "../../assets/Tela-Software.svg"
import Items from "../../assets/Elementos-Frente-Tela.svg"
import {motion} from "framer-motion"
import BackBlock from "../../assets/Elementos-Fundo-Tela.svg"

export default function ThirdSection(){
    const { scrollY } = useScroll()
    const [cardInView, setCardInView] = useState<boolean>(false)


    const variants = {
        float: (i: number) =>  ({
            y: [0, 10, 0],
            transition: {
                repeat: Infinity,
                duration: 4,
                delay: 0 + i
            }
        })
  
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest >= 1200){
        setCardInView(true)
    }
})
    const words = ["Sistema em Nuvem", "Integracao com eSocial", "Processo Descentralizado", "Admissao Online", "Ponto Eletronico", "Modulo de beneficios", "Sistema de Autoatendimento", "Fluxo de Ferias, Rescisao e Salarios", "API Aberta", "Acesso Mobile"]
    return (
        <>
            <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                <Flex w="80%"  alignItems={"center"} pb="130px">
                    <Flex alignItems={"center"} w="60%" minHeight="580px"  flexDir={"column"} >
                        <Flex w="80%" flexDirection={"column"} pt="140px" gap="30px"  >
                            <Flex  color="#ff6418"  gap="15px"  lineHeight={0} flexDir={"column"}>
                                <Text marginBlockStart={0}  marginBlockEnd={2} fontWeight={"bold"} letterSpacing={"2px"} fontSize={40}>Software de</Text>
                                <Text fontSize={32}  marginBlockStart={25}  marginBlockEnd={0} letterSpacing={"3px"}>folha de pagamento</Text>
                            </Flex>
                            <Text  fontSize={18} marginBlockStart={0}  marginBlockEnd={0} color="gray" w="70%">Precisao, seguranca e confiabilidade para sua folha de pagamento</Text>
                        </Flex>
                        <Flex w='80%' mt="30px" flexDir={"column"}   gap="10px">
                            {words.map((word, index) => <SoftwareCard isInView={cardInView} index={index} text={word}/>)}
                        </Flex>
                    </Flex>
                    <Flex  h="800px"alignItems={"end"} minW={"130px"} position={"relative"}>
                            <motion.image variants={variants} animate="float" style={{z: 2}}>
                                <Image src={Dashboard} />
                            </motion.image>
                            <motion.image  style={{position:"absolute",left:"-2%",top: "57%"}}>
                                <Image src={Items} />
                            </motion.image>
                            <motion.image >
                                <Image src={BackBlock} h="300px" left="-5%" top="79%" position={"absolute"} zIndex={-1}/>
                            </motion.image>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}