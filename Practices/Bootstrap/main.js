import { motion, useScroll } from "framer-motion"

function Component() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}