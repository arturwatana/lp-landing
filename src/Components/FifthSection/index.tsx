import { Flex, Text } from "@chakra-ui/react";
import Slider from "../Slider";
import Comment from "../Comment";
import Accordeon from "../Accordeon";


export default function FifthSection(){
    return (
        <>
            <Flex flexDir={"column"} position={"relative"} minH="1000px">
                <Flex background={"#F5F5F5"} flexDir={"column"} w="100%" minH="750px">
                    <Flex alignItems={"center"} justifyContent={"center"} letterSpacing={"3px"} color="#ff6418" fontSize={34} w="100%" flexDir={"column"} pt="50px" pb="60px">
                        <Text marginBlockEnd={0} marginBlockStart={0} fontWeight={"bold"}>Empresas</Text>
                        <Text marginBlockEnd={0} marginBlockStart={0}>que confiam na LeafPay</Text>
                    </Flex>
                    <Slider/>   
                </Flex>
                    <Flex minH="500px" gap="35px" top="35%" left="22%" alignItems={"center"} justifyContent={"center"} position="absolute">
                        <Comment text="“A Leafpay superou nossas expectativas trazendo tranquilidade já durante a fase de implementação. Procura sempre demonstrar os pontos de melhoria, assim como as possíveis soluções cabíveis, corrigindo o processo de ponta a ponta. Possuem equipe muito dedicada, dando todo o apoio necessário tanto para a administração quanto para os colaboradores."/>
                        <Comment text="“A Leafpay superou nossas expectativas trazendo tranquilidade já durante a fase de implementação. Procura sempre demonstrar os pontos de melhoria, assim como as possíveis soluções cabíveis, corrigindo o processo de ponta a ponta. Possuem equipe muito dedicada, dando todo o apoio necessário tanto para a administração quanto para os colaboradores."/>
                    </Flex>
                    <Flex pt="350px" alignItems={"center"} flexDir={"column"} justifyContent={"center"}>
                        <Flex flexDir={"column"} color="#ff6418" fontSize={34} letterSpacing={"3px"}>
                            <Text marginBlockEnd={0} marginBlockStart={0} fontWeight={"bold"}>Perguntas</Text>
                            <Text marginBlockEnd={0} marginBlockStart={0}>Frequentes</Text>
                        </Flex>
                        <Flex border="1px solid red" w="50%" minH="150px">
                            <Accordeon/>
                        </Flex>
                    </Flex>
            </Flex>
        </>
    )
}