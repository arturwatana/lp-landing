import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "../Card";
import { motion } from "framer-motion";




export default function SecondSection(){
    const variants = {
        render: {
            y: 0,
            opacity: 1,
       

        }
    }
    const cardsList = ["Folha de Pagamento", "Ponto Eletronico", "Admissao e rescisao", "Ferias e afastamento", "Encargos Anuais e mensais", "Provisoes e Integrador Contabil", "Relatorios Gerenciais", "Atendimento ao colaborador"]
    return (
        <>
            <Flex flexDir={"column"} w="100%" h="80vh" pt="130px"  alignItems={"center"} gap="30px">
                <Box  flexDir="column" h="200px"  alignItems={"center"}  lineHeight={"0px"} textAlign={"center"} color="#ff6418" fontSize={35}>
                    <Text fontWeight={"bold"} letterSpacing={"3px"} >Operacoes de RH</Text>
                    <Text marginTop={"50px"} letterSpacing={"3px"}>sob medida para o seu negocio</Text>
                </Box>
                <Flex w="35%" flexWrap={"wrap"} gap="20px" alignItems={"center"} justifyContent={"space-around"}>
                    {cardsList.map((phrase, index) => <Card tittle={phrase} customValue={index}/>)}
                </Flex>
            </Flex>
            <Flex justifyContent={"center"}  w="100%" alignItems={"center"} h="50vh" background={"#e5e5e5"}>
                <Flex  h="100%"  justifyContent={"center"}  alignItems={"center"} gap="80px" >
                    <Flex gap="40px" h="100%" justifyContent={"center"}  alignItems={"center"}>
                        <Flex  p="15px"position="relative" h="60%">
                        <motion.div whileInView={"render"} variants={variants} initial={{y: 200, opacity: 0}} style={{background:"#fff", borderRadius:"5px", color:"#ff6418", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding: "0px 35px"}}>
                        <Flex p="5px" borderRadius={"5px"} boxShadow= "5px 15px 30px 1px #cccccc"  top="0" left='0' background={"#fff"} position="absolute">
                            <motion.svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M2.91666 12.3959H19.6875" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.75 24.0625H11.6667" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.3125 24.0625H21.1458" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.0833 17.5437V23.4937C32.0833 28.6125 30.7854 29.8958 25.6083 29.8958H9.39166C4.21457 29.8958 2.91666 28.6125 2.91666 23.4937V11.5062C2.91666 6.38746 4.21457 5.10413 9.39166 5.10413H19.6875" stroke="#702CF2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.0625 9.11462H32.0833" stroke="#FF6401" stroke-width="2.5" stroke-linecap="round"></path><path d="M28.0729 13.125V5.10413" stroke="#FF6401" stroke-width="2.5" stroke-linecap="round"></path></motion.svg>
                        </Flex>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                        </motion.div>
                        </Flex>
                        <Flex  p="15px"position="relative" h="60%">
                        <motion.div whileInView={"render"} variants={variants} initial={{y: 200, opacity: 0}} style={{background:"#fff", borderRadius:"5px", color:"#ff6418", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding: "0px 35px"}}>
                        <Flex p="5px" borderRadius={"5px"} boxShadow= "5px 15px 30px 1px #cccccc"  top="0" left='0' background={"#fff"} position="absolute">
                            <motion.svg  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path d="M2.91666 12.3959H19.6875" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.75 24.0625H11.6667" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.3125 24.0625H21.1458" stroke="#702CF2" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.0833 17.5437V23.4937C32.0833 28.6125 30.7854 29.8958 25.6083 29.8958H9.39166C4.21457 29.8958 2.91666 28.6125 2.91666 23.4937V11.5062C2.91666 6.38746 4.21457 5.10413 9.39166 5.10413H19.6875" stroke="#702CF2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.0625 9.11462H32.0833" stroke="#FF6401" stroke-width="2.5" stroke-linecap="round"></path><path d="M28.0729 13.125V5.10413" stroke="#FF6401" stroke-width="2.5" stroke-linecap="round"></path></motion.svg>
                        </Flex>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                            <Text>Assistencia medica</Text>
                        </motion.div>
                        </Flex>
                       
                    </Flex>
                    <Flex flexDir={"column"} w="550px"  >
                        <Flex color={"#ff6418"} flexDir={"column"} lineHeight={0} gap={0}>
                            <Text fontWeight={"bold"} fontSize={40} margin="0">
                                Gestao
                            </Text>
                            <Text lineHeight={0} fontSize={30} letterSpacing={"5px"} marginTop={"50px"}>
                                de beneficios
                            </Text>
                        </Flex>
                        <Flex w="75%" color="gray" fontSize={23} >
                            <Text>Conceda benefícios e fortaleça o vínculo emocional dos seus colaboradores com automatização, inteligência e padronização.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}   
