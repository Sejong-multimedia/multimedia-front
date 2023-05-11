import Header from '../Header';

import Lottie from 'react-lottie';
import animationData from '@/assets/bg/animate-background.json';
import { Box, Main } from './LayoutType3.styled';
import { SidebarType1 } from '../Sidebar';

/**
 * @description layout with header
 */
type LayoutType3Props = {
    children: React.ReactNode;
};
const LayoutType3 = (props: LayoutType3Props) => {
    const { children } = props;

    return (
        <Box className="layout-type-3">
            <Header />
            <Main>{children}</Main>
        </Box>
    );
};

export default LayoutType3;
