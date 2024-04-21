import { Box, Flex, Image } from "@chakra-ui/react";
import Ace from "../../assets/ace2.png"
import {motion} from "framer-motion"
import { useEffect, useState } from "react";

type SwipeProps = {
    left: boolean,
    right: boolean
}

export default function Slider(){

    const [swipe, setSwipe] = useState<SwipeProps>({
        left: false,
        right: false
    })

    const variants = {
        swipeLeft: {
            x: -300
        },
        swipeRight: {
            x: 300
        }
    }
    
    useEffect(() => {
        if(swipe.left){
            setTimeout(() => {
                setSwipe((prev)=> ({
                    ...prev, 
                    left: !prev.left
                }))
            }, 1000)
        }
    }, [swipe])

    return (
        <>
            <Flex w="100%" border="1px solid red" justifyContent={"center"}>
                    <Box color="#222" onClick={() => setSwipe((prev) => ({...prev, left: true}))}>
                        <p>Left</p>
                    </Box>
                <Flex maxW="600px" overflow={"hidden"} border="1px solid red">
                    <motion.div animate={swipe.left ? "swipeLeft" : ""} style={{display:"flex"}} variants={variants} >
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