import { Box, Flex, Image, Text, transition } from "@chakra-ui/react";
import {motion } from "framer-motion"
import { useState } from "react";
import { GiPlainArrow } from "react-icons/gi";

type SoftwareCardProps = {
    index: number
    text: string,
}

export default function SoftwareCard({index, text}: SoftwareCardProps){
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const variants = {
        translate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2 + (i/6),
                duration: 1 
            }
        }),
        show: {
            opacity: 1,
            display: "block",
            transition:{
                duration: 0.1
            }
        }
    }
    return (
        <>
            <Flex w="80%" gap="20px" position={"relative"}>
                <motion.div initial={{opacity: 0, y: -50}}  variants={variants}  custom={index} viewport={{once: true, amount: 0.4}} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}  whileInView={"translate"} whileHover={{scale: 1.1}} style={{cursor: "pointer", maxWidth: "200px", width: "200px", justifyContent:"space-around", display:"flex", minHeight: "50px" ,alignItems:"center", gap:"10px", boxShadow:"-4px 9px 19px 0px rgba(0, 0, 0, 0.05)", padding: "3px 6px", borderRadius: "10px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"><path d="M14.5 23.8646C14.0046 23.8646 13.5938 23.4537 13.5938 22.9583V19.3333C13.5938 18.8379 14.0046 18.4271 14.5 18.4271C14.9954 18.4271 15.4062 18.8379 15.4062 19.3333V22.9583C15.4062 23.4537 14.9954 23.8646 14.5 23.8646Z" fill="#FF6401"></path><path d="M14.5 28.6979C12.6634 28.6979 11.1771 27.2116 11.1771 25.375C11.1771 23.5383 12.6634 22.0521 14.5 22.0521C16.3367 22.0521 17.823 23.5383 17.823 25.375C17.823 27.2116 16.3367 28.6979 14.5 28.6979ZM14.5 23.8646C13.6663 23.8646 12.9896 24.5412 12.9896 25.375C12.9896 26.2087 13.6663 26.8854 14.5 26.8854C15.3338 26.8854 16.0105 26.2087 16.0105 25.375C16.0105 24.5412 15.3338 23.8646 14.5 23.8646Z" fill="#FF6401"></path><path d="M21.75 26.2812H16.9166C16.4212 26.2812 16.0104 25.8704 16.0104 25.375C16.0104 24.8796 16.4212 24.4688 16.9166 24.4688H21.75C22.2454 24.4688 22.6562 24.8796 22.6562 25.375C22.6562 25.8704 22.2454 26.2812 21.75 26.2812Z" fill="#FF6401"></path><path d="M12.0833 26.2812H7.25C6.75458 26.2812 6.34375 25.8704 6.34375 25.375C6.34375 24.8796 6.75458 24.4688 7.25 24.4688H12.0833C12.5788 24.4688 12.9896 24.8796 12.9896 25.375C12.9896 25.8704 12.5788 26.2812 12.0833 26.2812Z" fill="#FF6401"></path><path d="M19.4057 20.2395C19.3936 20.2395 19.3815 20.2395 19.3573 20.2395H7.6848C4.50688 20.022 3.08105 17.5812 3.08105 15.4062C3.08105 13.497 4.18066 11.3825 6.57316 10.7542C5.94482 8.13207 6.52482 5.67909 8.22857 3.89075C10.2102 1.81242 13.3761 0.990811 16.119 1.83664C18.6081 2.59789 20.3603 4.62784 21.0128 7.44326C23.1757 7.96284 24.9036 9.60623 25.5923 11.8779C26.3536 14.3671 25.6527 16.9166 23.7798 18.5478C22.6077 19.6353 21.049 20.2395 19.4057 20.2395ZM7.73315 12.3975C5.78773 12.5545 4.91774 14.0166 4.91774 15.4062C4.91774 16.8079 5.79981 18.282 7.76939 18.427H19.3815C19.3936 18.427 19.4057 18.427 19.4177 18.427C20.6019 18.427 21.7378 17.992 22.5957 17.1945C24.1907 15.8049 24.2994 13.8112 23.8765 12.3975C23.4415 10.9837 22.2453 9.38869 20.1428 9.12286C19.744 9.07452 19.4298 8.77245 19.3573 8.3737C18.9465 5.89661 17.6052 4.1929 15.5994 3.57665C13.5332 2.94831 11.0561 3.58873 9.55774 5.15956C8.09566 6.69414 7.75731 8.83289 8.60315 11.2012C8.77231 11.6725 8.53067 12.192 8.05942 12.3612C7.95067 12.3853 7.85398 12.4095 7.73315 12.3975Z" fill="#702CF2"></path></svg>
                    <Text fontSize={13} w="65%" wordBreak={"break-word"}  color="#702CF2">{text}</Text>
                </motion.div>
                <motion.div initial={{display:"none", opacity: 0}} variants={variants} animate={isHovered ? "show" : ""}  style={{rotate: "90deg", position: "absolute", left: "22%", fontSize: 40, color: "gray"}}>
                        <GiPlainArrow  />
                </motion.div>
                <motion.div style={{background:"gray", color:"white", border:"1px solid gray", left:"25%", position:"absolute", width: "40%", height: "100px", borderRadius:"10px", padding: "20px"}} variants={variants} initial={{display:"none", opacity: 0}} animate={isHovered ? "show" : ""} >
                    <Text marginBlock={0} >Sistema em nuvem: Infraestrutura de computação remota pela internet, oferecendo escalabilidade, flexibilidade e segurança para aplicativos e dados.</Text>
                </motion.div>
            </Flex>
        </>
    )
}