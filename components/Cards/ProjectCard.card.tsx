import { Box } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const ProjectCard: NextComponentType<NextPageContext, {}, Props> = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            rounded="xl"
            h="96"
            w="72"
            bgColor="white"
            m="20"
        >
            <Box
                h="40"
                w="full"
                roundedTop="xl"
                bgGradient="linear(90deg, #DA22FF 0%, #9733EE 100%)"
            ></Box>

            <Box rounded="full" border="3px solid" borderColor="white"></Box>
        </Box>
    );
};

export default ProjectCard;
