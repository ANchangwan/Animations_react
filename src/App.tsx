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
  start: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  leaving: {
    x: -500,
    opacity: 0,
    scale: 0,
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const next = () => setVisible((prev) => (prev === 11 ? 10 : prev + 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={boxVariants}
              initial={"start"}
              animate={"end"}
              exit={"leaving"}
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={next}>next</button>
    </Wrapper>
  );
}

export default App;
