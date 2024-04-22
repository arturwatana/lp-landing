import { Flex, Text } from "@chakra-ui/react";
import Slider from "../Slider";
import Comment from "../Comment";


export default function FifthSection(){
    return (
        <>
            <Flex flexDir={"column"} position={"relative"} minH="1000px">
                <Flex background={"#F5F5F5"} flexDir={"column"} w="100%" minH="750px">
                    <Flex alignItems={"center"} justifyContent={"center"} letterSpacing={"3px"} color="#ff6418" fontSize={30} w="100%" flexDir={"column"} pt="50px" pb="60px">
                        <Text marginBlockEnd={0} marginBlockStart={0} fontWeight={"bold"}>Empresas</Text>
                        <Text marginBlockEnd={0} marginBlockStart={0}>que confiam na LeafPay</Text>
                    </Flex>
                    <Slider/>
                </Flex>
                    <Flex minH="500px" gap="35px" top="35%" left="30%" alignItems={"center"} justifyContent={"center"} position="absolute">
                        <Comment/>
                        <Comment/>
                    </Flex>
            </Flex>
        </>
    )
}