import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Project from "./Project";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 40px;
  background-color: white;
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tab: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgba(46, 204, 113,1.0)",
    transition: { duration: 10 },
  },
};

function App() {
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    // x.onChange(() => console.log(x.get()));
    potato.onChange(() => console.log(potato.get()));
  }, [x]);
  return (
    <Wrapper>
      {/* <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin /> */}
      <Project />
    </Wrapper>
  );
}

export default App;
