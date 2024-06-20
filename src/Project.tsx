import { motion, useMotionValue } from "framer-motion";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 30%;
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
  hover: (custom: number) => ({
    transition: { scale: custom * 0.2 },
  }),
};

function Project() {
  const move = useMotionValue(0);
  const custom = useMotionValue(move);
  console.log(custom);
  return (
    <Wrapper>
      <Box variants={boxVariant} whileHover="hover"></Box>
      <Box variants={boxVariant} whileHover="hover">
        <Circle />
      </Box>
      <Box variants={boxVariant} whileHover="hover" custom={custom}></Box>
      <Box variants={boxVariant} whileHover="hover"></Box>
    </Wrapper>
  );
}

export default Project;
