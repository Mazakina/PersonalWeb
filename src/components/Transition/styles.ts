import styled from 'styled-components'
import { motion } from 'framer-motion'

export const OverflowControl = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

export const Container  = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color:black;
  position: fixed;
  z-index: 22;
  left: 0;
`

