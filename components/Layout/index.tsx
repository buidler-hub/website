import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Box
            minH="100vh"
            minW="full"
            overflowX="hidden"
            bgSize="cover"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
                backgroundImage: 'url(/assets/bg.svg)',
            }}
        >
            {children}
        </Box>
    );
};

export default Layout;
