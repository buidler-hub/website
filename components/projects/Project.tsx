import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IProjectProps {
    project: {
        name: string;
        description: string;
        image: string;
        links: { name: string; url: string; icon: string }[];
    };
}

const Project: FC<IProjectProps> = ({
    project: { name, description, image, links },
}) => {
    return (
        <HStack color="white">
            <Image src={image} width="750px" alt={name} borderRadius="8px" />
            <VStack align="flex-start" px="10">
                <Text as="h1" fontSize="7xl" mb="10">
                    {name}
                </Text>
                <Text as="p" fontSize="xl" mb="10">
                    {description}
                </Text>
                {links.map(({ name, url, icon }) => (
                    <Link
                        alignItems="center"
                        display="flex"
                        isExternal
                        href={url}
                        key={name}
                        bg="#24273F"
                        px="4"
                        py="2"
                        borderRadius="8px"
                    >
                        <Image src={icon} width="30px" alt={name} />
                        <Text
                            as="span"
                            fontSize="24px"
                            alignSelf="center"
                            ml="3"
                        >
                            {name}
                        </Text>
                    </Link>
                ))}
            </VStack>
        </HStack>
    );
};
export default Project;
