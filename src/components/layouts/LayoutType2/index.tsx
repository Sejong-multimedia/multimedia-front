import Header from '../Header';

import { Box, Main } from './LayoutType2.styled';

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
            <Main>{children}</Main>
        </Box>
    );
};

export default LayoutType2;
