import { GitHubIcon, GlobeIcon, TwitterIcon } from '../Icons';
import { Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface IMemberProps {
    member: {
        name: string;
        image: string;
        twitter: string;
        github: string;
        website: string;
    };
}

const Member: FC<IMemberProps> = ({
    member: { name, image, twitter, github, website },
}) => {
    return (
        <Flex flexDir="column" align="center">
            <Image width="350" height="350" alt={name} src={image} />
            <Text
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                color="white"
                mt="2"
                mb="2"
                align="center"
            >
                {name}
            </Text>
            <Flex gap="3" align="center">
                <Link isExternal href={github}>
                    <GitHubIcon width="35px" height="35px" />
                </Link>
                <Link isExternal href={twitter}>
                    <TwitterIcon width="35px" height="35px" />
                </Link>
                <Link isExternal href={website}>
                    <GlobeIcon width="35px" height="35px" />
                </Link>
            </Flex>
        </Flex>
    );
};
export default Member;
