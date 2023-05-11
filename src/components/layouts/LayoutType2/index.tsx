import Header from '../Header';

import Lottie from 'react-lottie';
import animationData from '@/assets/bg/animate-background.json';
import { Box, Main } from './LayoutType2.styled';
import { SidebarType1 } from '../Sidebar';

/**
 * @description layout with header
 */
type LayoutType2Props = {
    children: React.ReactNode;
};
const LayoutType2 = (props: LayoutType2Props) => {
    const { children } = props;

    return (
        <Box className="layout-type-2">
            <Header />
            <SidebarType1 />
            <Main>{children}</Main>
        </Box>
    );
};

export default LayoutType2;
