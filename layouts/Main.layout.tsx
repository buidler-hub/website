import { Header, SideBar } from '../components';
import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDir="column"
            minH="100vh"
            minW="full"
            overflowX="hidden"
            bgSize="cover"
            style={{
                backgroundImage: 'url(/assets/bg.svg)',
            }}
        >
            <Header />
            {children}

            <SideBar />
        </Box>
    );
};

export default Layout;
