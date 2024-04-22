import { Flex, Text } from "@chakra-ui/react"



type CommentProps = {
    text: string
    photo: string
}

export default function Comment(){
    return (
        <>
            <Flex flexDir={"column"} boxShadow="5px 15px 30px 1px #cccccc" background={"#fff"} rounded={"10px"} minH="400px" minW="350px" >
                <Text>asd</Text>
                <Flex>
                    <Text>Photo</Text>
                    <Flex flexDir={"column"}>
                        <Text>
                            Name
                        </Text>
                        <Text>
                            Empresa
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}