import { Flex, Text } from "@chakra-ui/react"



type CommentProps = {
    text: string
    photo?: string
}

export default function Comment({photo, text}: CommentProps){
    return (
        <>
            <Flex flexDir={"column"} justifyContent={"space-around"} p="20px 20px 20px 40px" fontSize={14} boxShadow="5px 15px 30px 1px #cccccc" background={"#fff"} rounded={"10px"} minH="400px" maxW="350px" >
                <Text w="90%" letterSpacing={"1px"} >{text}</Text>
                <Flex alignItems={"center"}  gap="50px">
                    <Text marginBlockStart={0} marginBlockEnd={0}>Photo</Text>
                    <Flex flexDir={"column"}>
                        <Text marginBlockStart={0} marginBlockEnd={0}>
                            Name
                        </Text>
                        <Text marginBlockStart={0} marginBlockEnd={0}>
                            Empresa
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}