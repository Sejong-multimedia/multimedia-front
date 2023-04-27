import Header from '../header';

import Lottie from 'react-lottie';
import animationData from '@/assets/bg/animate-background.json';
import { Box, Main } from './LayoutType2.styled';

/**
 * @description layout with header
 */
type LayoutType2Props = {
    children: React.ReactNode;
};
const LayoutType2 = (props: LayoutType2Props) => {
    const { children } = props;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
    };

    return (
        <Box className="layout-type-2">
            <Header />
            <Main>
                {children}
                <Box className="background-animation">
                    <Lottie options={defaultOptions} height={400} width={400} />
                </Box>
            </Main>
        </Box>
    );
};

export default LayoutType2;
