import { Flex, Link, Image } from '@chakra-ui/react';
import type { FC } from 'react';

const Footer: FC = () => {
    return (
        <Flex align="center" justify="center" pb={['10', '0']}>
            <Link
                isExternal
                href="https://vercel.com?utm_source=buidlers-hub&utm_campaign=oss"
            >
                <Image
                    src="/assets/powered-by-vercel.svg"
                    height="50"
                    border="1px solid #5E5E5E"
                    width="250"
                    alt="powered by vercel"
                    borderRadius="8px"
                    objectFit="contain"
                />
            </Link>
        </Flex>
    );
};
export default Footer;
