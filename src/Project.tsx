import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

const Btn = styled.div`
  grid-column: span 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  width: 33%;
  border: none;
  padding: 10px 15px;
  background-color: rgba(126, 214, 223, 1);
  color: white;
  border-radius: 15px;
  font-weight: 500;
  font-size: 25px;
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: white;
  opacity: 0.6;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  place-self: center;
`;

const Circle = styled(motion.div)`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  background-color: black;
`;

const boxVariant = {
  hover: (custom: any) => {
    switch (custom) {
      case 1:
        return {
          opacity: 1,
          scale: 1.2,
          transformOrigin: "bottom right",
        };
      case 2:
        return {
          opacity: 1,
          scale: 1.2,
          transformOrigin: "bottom left",
        };
      case 3:
        return {
          opacity: 1,
          scale: 1.2,
          transformOrigin: "top right",
        };
      case 4:
        return {
          opacity: 1,
          scale: 1.2,
          transformOrigin: "top left",
        };
      default:
        return {
          opacity: 1,
          scale: 1.1,
        };
    }
  },
};
const circleVariants = {
  initial: { x: 0, y: 0 },
  moved: { x: -210, y: 20 },
};

function Project() {
  const [change, setChange] = useState(true);
  const [id, setId] = useState<null | string>("");
  const onClick = () => {
    setChange((current) => !current);
  };
  return (
    <Wrapper>
      <Box custom={1} variants={boxVariant} whileHover="hover"></Box>
      <Box custom={2} variants={boxVariant} whileHover="hover">
        {change ? <Circle layoutId="circle" /> : null}
      </Box>
      <Box custom={3} variants={boxVariant} whileHover="hover">
        {!change ? <Circle layoutId="circle" /> : null}
      </Box>
      <Box custom={4} variants={boxVariant} whileHover="hover"></Box>
      <Overlay></Overlay>
      <Btn>
        <Button
          style={{ color: change ? "#e74c3c" : "#2c3e50" }}
          onClick={onClick}
          whileTap={{ scale: 1.4 }}
          whileHover={{ scale: 1.2 }}
        >
          Switch
        </Button>
      </Btn>
    </Wrapper>
  );
}

export default Project;
