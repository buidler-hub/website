import { Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { FaGithub, FaGlobe, FaTwitter } from 'react-icons/fa';

interface ISocials {
    twitter: string;
    github: string;
    website: string;
}

const Socials: FC<ISocials> = ({ github, twitter, website }) => {
    return (
        <Flex gap="3" align="center">
            <Link isExternal href={github}>
                <FaGithub size="20px" />
            </Link>
            <Link isExternal href={twitter}>
                <FaTwitter size="20px" />
            </Link>
            <Link isExternal href={website}>
                <FaGlobe size="20px" />
            </Link>
        </Flex>
    );
};

export { Socials };
