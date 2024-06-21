import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
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
  place-self: center;
`;

const Circle = styled(motion.div)``;

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

function Project() {
  return (
    <Wrapper>
      <Box custom={1} variants={boxVariant} whileHover="hover"></Box>
      <Box custom={2} variants={boxVariant} whileHover="hover">
        <Circle />
      </Box>
      <Box custom={3} variants={boxVariant} whileHover="hover"></Box>
      <Box custom={4} variants={boxVariant} whileHover="hover"></Box>
      <Btn>
        <Button whileHover={{ scale: 1.2 }}>Switch</Button>
      </Btn>
    </Wrapper>
  );
}

export default Project;
