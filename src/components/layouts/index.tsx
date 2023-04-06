import { Box } from './layouts.styled';
import Header from './headers';

type LayoutType = {
    children: React.ReactNode;
};

const Layout = (props: LayoutType) => {
    const { children } = props;
    return (
        <Box className="layout">
            <Header />
            <div className="main">{children}</div>
        </Box>
    );
};

export default Layout;
