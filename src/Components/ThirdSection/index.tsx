import { Flex, Text } from "@chakra-ui/react";
import SoftwareCard from "../SoftwareCard";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";



export default function ThirdSection(){
    const words = ["Sistema em Nuvem", "Integracao com eSocial", "Processo Descentralizado", "Admissao Online", "Ponto Eletronico", "Modulo de beneficios", "Sistema de Autoatendimento", "Fluxo de Ferias, Rescisao e Salarios", "API Aberta", "Acesso Mobile"]

    return (
        <>
            <Flex minHeight="580px" alignItems={"center"}  flexDir={"column"} pb="130px">
                <Flex w="50%" flexDirection={"column"} pt="140px" gap="30px"  >
                    <Flex  color="#ff6418"  gap="15px"  lineHeight={0} flexDir={"column"}>
                        <Text marginBlockStart={0}  marginBlockEnd={0} fontWeight={"bold"} letterSpacing={"2px"} fontSize={40}>Software de</Text>
                        <Text fontSize={32}  marginBlockEnd={0} letterSpacing={"3px"}>folha de pagamento</Text>
                    </Flex>
                    <Text  fontSize={18} color="gray" w="40%">Precisao, seguranca e confiabilidade para sua folha de pagamento</Text>
                </Flex>
                <Flex w='50%' mt="30px" flexDir={"column"}   gap="10px">
                    {words.map((word, index) => <SoftwareCard  index={index} text={word}/>)}
                </Flex>
            </Flex>
        </>
    )
}