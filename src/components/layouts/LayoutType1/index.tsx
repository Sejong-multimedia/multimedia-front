import Header from '../Header';

import Lottie from 'react-lottie';
import animationData from '@/assets/bg/animate-background.json';
import { Box, Main } from './LayoutType1.styled';

/**
 * @description layout with header
 */
type LayoutType1Props = {
    children: React.ReactNode;
};
const LayoutType1 = (props: LayoutType1Props) => {
    const { children } = props;

    return (
        <Box className="layout-type-1">
            <Main>{children}</Main>
        </Box>
    );
};

export default LayoutType1;
