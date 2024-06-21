import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Project from "./Project";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#3b91bc, #04a1cd);
  display: flex;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  position: absolute;
  top: 50px;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: 500;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (custom: boolean) => {
    return {
      x: custom ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: (custom: boolean) => {
    return {
      x: custom ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    };
  },
};

function App() {
  return (
    <Wrapper>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
