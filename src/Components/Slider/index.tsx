import { Box, Flex, Image } from "@chakra-ui/react";
import Ace from "../../assets/ace2.png"
import {motion} from "framer-motion"
import { useEffect, useState } from "react";

type SwipeProps = {
    cards: number,
    cardInView: number
}

export default function Slider(){

    const [swipe, setSwipe] = useState<SwipeProps>({
        cards: 8,
        cardInView: 0
    })

    const variants = {
        swipe:(i: number) => ({
            x: 0 + (-300 * (i - 2))
        }),
    }
    
    useEffect(() => {
        console.log(swipe)
    }, [swipe])

    return (
        <>
            <Flex w="100%" border="1px solid red" justifyContent={"center"}>
                    <Box color="#222" onClick={() => setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 0 ? 8 : prev.cardInView -1}))}>
                        <p>Left</p>
                    </Box>
                <Flex maxW="600px" overflow={"hidden"} border="1px solid red">
                    <motion.div animate={"swipe"} style={{display:"flex"}} custom={swipe.cardInView} variants={variants} >
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                        <Image src={Ace}/>
                    </motion.div>
                </Flex>
             </Flex>
        </>
    )
}