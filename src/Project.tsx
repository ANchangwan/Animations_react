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
  hover: ({ x, y }: any) => ({
    opacity: 1,
    scaleX: x * 1.2,
    scaleY: y * 1.2,
  }),
};

function Project() {
  const x = useMotionValue(1);
  const y = useMotionValue(1);

  return (
    <Wrapper>
      <Box
        custom={x}
        variants={boxVariant}
        whileHover="hover"
      ></Box>
      <Box variants={boxVariant} whileHover="hover">
        <Circle />
      </Box>
      <Box variants={boxVariant} whileHover="hover"></Box>
      <Box variants={boxVariant} whileHover="hover"></Box>
    </Wrapper>
  );
}

export default Project;
