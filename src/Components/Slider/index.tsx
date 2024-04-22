import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Ace from "../../assets/ace2.png"
import Caudalie from "../../assets/Logo-Caudalie.png"
import ConectCar from "../../assets/Logo-ConectCar (1).png"
import Flash from "../../assets/Logo-Flash.png"
import Minu from "../../assets/Logo-Minu.png"
import Pipo from "../../assets/Logo-Pipo-Saude.png"
import Provi from "../../assets/Logo-Provi.png"
import Provu from "../../assets/provu.png"
import {easeIn, motion} from "framer-motion"
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
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
            x: 0 - (180 * i),
            transition: {
                duration: 0.5,
            }
        }),
    }

    useEffect(() => {
       const interval = setInterval(() => {
            setSwipe((prev) => ({...prev, cardInView: prev.cardInView  === 4 ? 0 : prev.cardInView+ 1}))
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    

    return (
        <>
            <Flex w="100%"  justifyContent={"center"} >
                    <Box color="#222" onClick={() => setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 0 ? 4 : prev.cardInView -1}))}>
                        <Text fontSize={35} pt="20px" color="#ff6418"><IoIosArrowBack/></Text>
                    </Box>
                <Flex maxW="700px" overflow={"hidden"}  >
                    <motion.div animate={"swipe"}  style={{display:"flex", gap: "20px"}} custom={swipe.cardInView} variants={variants} >
                        <Image w="160px" fit={"contain"}  src={Ace}/>
                        <Image w="160px" fit={"contain"} src={Caudalie}/>
                        <Image w="160px" fit={"contain"} src={ConectCar}/>
                        <Image w="160px" fit={"contain"} src={Provi}/>
                        <Image w="160px" fit={"contain"} src={Provu}/>
                        <Image w="160px" fit={"contain"} src={Minu}/>
                        <Image w="160px" fit={"contain"} src={Flash}/>
                        <Image w="160px" fit={"contain"} src={Pipo}/>
                    </motion.div>
                </Flex>
                <Box color="#222" onClick={() => setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 4 ? 0 : prev.cardInView +1}))}>
                        <Text fontSize={35} h="45%" color="#ff6418"  transform="rotate(180deg)"><IoIosArrowBack/></Text>
                </Box>
             </Flex>
        </>
    )
}